import { spawn } from "node:child_process";
import { createHash, randomBytes } from "node:crypto";
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import type { AddressInfo } from "node:net";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { defineAgent } from "eve";
import { Client } from "@modelcontextprotocol/sdk/client";

export default defineAgent({
  model: "google/gemini-2.5-flash",
});
const invokedDirectly =
  process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href;

const baseMcpUrl = "https://mcp.base.org";
const baseMcpScope = "agent_wallet:transact";
const approvalTimeoutMs = 5 * 60 * 1000;

interface OAuthEndpoints {
  register: string;
  authorize: string;
  token: string;
}

async function discoverOAuthEndpoints(): Promise<OAuthEndpoints> {
  const fallback = {
    register: `${baseMcpUrl}/register`,
    authorize: `${baseMcpUrl}/authorize`,
    token: `${baseMcpUrl}/token`,
  };
  try {
    const res = await fetch(`${baseMcpUrl}/.well-known/oauth-authorization-server`);
    if (!res.ok) return fallback;
    const meta = (await res.json()) as {
      registration_endpoint?: string;
      authorization_endpoint?: string;
      token_endpoint?: string;
    };
    return {
      register: meta.registration_endpoint ?? fallback.register,
      authorize: meta.authorization_endpoint ?? fallback.authorize,
      token: meta.token_endpoint ?? fallback.token,
    };
  } catch {
    return fallback;
  }
}

async function registerClient(registerUrl: string, redirectUri: string): Promise<string> {
  const res = await fetch(registerUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      redirect_uris: [redirectUri],
      client_name: "kiru",
      grant_types: ["authorization_code"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
      scope: baseMcpScope,
    }),
  });
  if (!res.ok) throw new Error(`client registration failed: HTTP ${res.status}`);
  const body = (await res.json()) as { client_id?: string };
  if (body.client_id === undefined) throw new Error("client registration returned no client_id");
  return body.client_id;
}

async function exchangeCode(
  tokenUrl: string,
  code: string,
  redirectUri: string,
  clientId: string,
  verifier: string,
): Promise<string> {
  const res = await fetch(tokenUrl, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: verifier,
    }),
  });
  if (!res.ok) throw new Error(`token exchange failed: HTTP ${res.status}`);
  const body = (await res.json()) as { access_token?: string };
  if (body.access_token === undefined) throw new Error("token exchange returned no access token");
  return body.access_token;
}
function openBrowser(url: string): void {
  const opener = process.platform === "darwin" ? "open" : process.platform === "win32" ? "cmd" : "xdg-open";
  const args = process.platform === "win32" ? ["/c", "start", "", url] : [url];
  try {
    const child = spawn(opener, args, { stdio: "ignore", detached: true });
    child.on("error", () => {
      // No opener on this machine; the printed URL is the fallback.
    });
    child.unref();
  } catch {
    // The authorize URL is printed below, so the user can open it by hand.
  }
}

interface JsonRpcMessage {
  jsonrpc: "2.0";
  id?: string | number;
  method?: string;
  params?: unknown;
  result?: unknown;
}

class BearerTransport {
  onclose?: () => void;
  onerror?: (error: Error) => void;
  onmessage?: (message: JsonRpcMessage) => void;
  sessionId?: string;
  negotiatedProtocolVersion?: string;
  private protocolVersion?: string;
  constructor(
    private readonly url: string,
    private readonly accessToken: string,
  ) {}
  setProtocolVersion(version: string): void {
    this.protocolVersion = version;
  }
  async start(): Promise<void> {}
  async close(): Promise<void> {
    this.onclose?.();
  }
  async send(message: JsonRpcMessage): Promise<void> {
    const headers: Record<string, string> = {
      "content-type": "application/json",
      accept: "application/json, text/event-stream",
      authorization: `Bearer ${this.accessToken}`,
    };
    if (this.sessionId !== undefined) headers["mcp-session-id"] = this.sessionId;
    if (this.protocolVersion !== undefined) headers["mcp-protocol-version"] = this.protocolVersion;
    let res: Response;
    try {
      res = await fetch(this.url, { method: "POST", headers, body: JSON.stringify(message) });
    } catch (err) {
      const failure = err instanceof Error ? err : new Error(String(err));
      this.onerror?.(failure);
      throw failure;
    }
    if (res.status === 401) throw new Error("base mcp rejected the access token (HTTP 401)");
    if (!res.ok) throw new Error(`base mcp request failed: HTTP ${res.status}`);
    const session = res.headers.get("mcp-session-id");
    if (session !== null) this.sessionId = session;
    if (res.status === 202) return;
    if ((res.headers.get("content-type") ?? "").includes("application/json")) {
      this.deliver(await res.json());
      return;
    }
    for (const line of (await res.text()).split("\n")) {
      if (!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if (data === "" || data === "[DONE]") continue;
      this.deliver(JSON.parse(data));
    }
  }
  private deliver(payload: unknown): void {
    const message = payload as JsonRpcMessage;
    const version = (message.result as { protocolVersion?: unknown } | undefined)?.protocolVersion;
    if (typeof version === "string") this.negotiatedProtocolVersion = version;
    this.onmessage?.(message);
  }
}

async function runBaseMcpHandshake(): Promise<void> {
  const endpoints = await discoverOAuthEndpoints();
  const verifier = randomBytes(64).toString("base64url");
  const challenge = createHash("sha256").update(verifier).digest().toString("base64url");
  const state = randomBytes(32).toString("base64url");

  let resolveCode!: (code: string) => void;
  let rejectCode!: (err: Error) => void;
  const codeArrived = new Promise<string>((resolve, reject) => {
    resolveCode = resolve;
    rejectCode = reject;
  });
  const server = createServer((req, res) => {
    const incoming = new URL(req.url ?? "/", "http://127.0.0.1");
    if (incoming.pathname !== "/callback") {
      res.writeHead(404, { "content-type": "text/plain" }).end("not found");
      return;
    }
    const failure = incoming.searchParams.get("error");
    const code = incoming.searchParams.get("code");
    if (failure !== null || incoming.searchParams.get("state") !== state || code === null) {
      res.writeHead(400, { "content-type": "text/plain" }).end("authorization failed, return to the terminal");
      fail(failure === null ? new Error("authorization response missing code") : new Error(`authorization failed: ${failure}`));
      return;
    }
    res.writeHead(200, { "content-type": "text/html" }).end("<p>Approved. Return to the terminal.</p>");
    clearTimeout(timer);
    server.close();
    resolveCode(code);
  });
  let timer: ReturnType<typeof setTimeout>;
  function fail(err: Error): void {
    clearTimeout(timer);
    server.close();
    rejectCode(err);
  }
  timer = setTimeout(
    () => fail(new Error(`no approval arrived within ${approvalTimeoutMs / 1000}s, refusing to proceed`)),
    approvalTimeoutMs,
  );
  const port = await new Promise<number>((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", reject);
      server.on("error", fail);
      resolve((server.address() as AddressInfo).port);
    });
  });

  const redirectUri = `http://127.0.0.1:${port}/callback`;
  let clientId: string;
  try {
    clientId = await registerClient(endpoints.register, redirectUri);
  } catch (err) {
    fail(err instanceof Error ? err : new Error(String(err)));
    throw err;
  }
  const authorizeUrl = new URL(endpoints.authorize);
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", baseMcpScope);
  authorizeUrl.searchParams.set("code_challenge", challenge);
  authorizeUrl.searchParams.set("code_challenge_method", "S256");
  authorizeUrl.searchParams.set("state", state);
  console.log(`authorize in the browser: ${authorizeUrl.toString()}`);
  openBrowser(authorizeUrl.toString());

  const code = await codeArrived;
  const accessToken = await exchangeCode(endpoints.token, code, redirectUri, clientId, verifier);

  const transport = new BearerTransport(baseMcpUrl, accessToken);
  const client = new Client({ name: "kiru", version: "0.1.0" }, { capabilities: {} });
  await client.connect(transport);
  const tools = await client.listTools();
  const serverInfo = client.getServerVersion();
  console.log(`base mcp server: ${baseMcpUrl}`);
  console.log(`protocol version: ${transport.negotiatedProtocolVersion ?? "unknown"}`);
  console.log(`server: ${(serverInfo?.name ?? "unknown").trim()} ${(serverInfo?.version ?? "").trim()}`.trimEnd());
  console.log(`tools (${tools.tools.length}): ${tools.tools.map((tool) => tool.name).join(", ")}`);
  await client.close();
}

if (invokedDirectly) {
  const here = dirname(fileURLToPath(import.meta.url));
  const instructions = readFileSync(join(here, "instructions.md"), "utf8");
  console.log("kiru agent booted");
  console.log(`instructions: ${instructions.length} chars loaded`);
  try {
    await runBaseMcpHandshake();
  } catch (err) {
    console.error(
      `base mcp handshake failed, fail closed with no writes attempted: ${err instanceof Error ? err.message : String(err)}`,
    );
    process.exit(1);
  }
}
