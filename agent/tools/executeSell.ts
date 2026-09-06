import { defineTool } from "eve/tools";
import { always } from "eve/tools/approval";
import { chainId, executeSellInput, executeSellOutput, type ExecuteSellInput } from "../lib/contracts.js";
import { checkFunds } from "../lib/funds.js";
import { clearInFlight, markInFlight, recordFill } from "../lib/orderMemory.js";
import { NVDAC, nvdacToBase } from "../lib/routingQuote.js";
import { buildSwapBody, checkApproval, fetchSwap } from "../lib/swap.js";

// Submit a staged NVDAc sell quote through the Uniswap routing API on Base
// 8453 and Base MCP send_calls, then poll get_request_status to confirmed.
// Every run needs an explicit user yes in chat through approval always().
// Decline, timeout, and failure exit clean with no partial retry.

const MCP_URL = "https://mcp.base.org";
const POLL_EVERY_MS = 3000;
const POLL_TIMEOUT_MS = 5 * 60 * 1000;
const RPC_TIMEOUT_MS = 30000;
const SIDECAR_TIMEOUT_MS = 8000;

function sidecarBase(): string {
  return process.env.SIBYL_SIDECAR_URL ?? "http://localhost:8000";
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

interface PendingBody {
  quoteId?: unknown;
  side?: unknown;
  token?: unknown;
  payTokens?: unknown;
  getUsdc?: unknown;
  expiresAt?: unknown;
  rawQuote?: unknown;
}

async function recallPending(tenantId: string): Promise<PendingBody | null> {
  try {
    const res = await fetch(`${sidecarBase()}/recall`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tenant_id: tenantId, category: "state", name: "pending_quote" }),
      signal: AbortSignal.timeout(SIDECAR_TIMEOUT_MS),
    });
    if (!res.ok) return null;
    const out = (await res.json()) as { ok?: boolean; entity?: { body?: unknown } };
    if (out.ok !== true) return null;
    return asRecord(out.entity?.body);
  } catch {
    return null;
  }
}

interface RpcMessage {
  jsonrpc: "2.0";
  id?: number;
  method?: string;
  params?: unknown;
  result?: unknown;
  error?: { message?: unknown };
}

interface McpSession {
  token: string;
  nextId: number;
  sessionId?: string;
  protocolVersion?: string;
}

function readRpc(payload: RpcMessage, session: McpSession): RpcMessage {
  const version = (payload.result as { protocolVersion?: unknown } | undefined)?.protocolVersion;
  if (typeof version === "string") session.protocolVersion = version;
  if (payload.error !== undefined) {
    const detail = typeof payload.error.message === "string" ? payload.error.message : "unknown error";
    throw new Error(`base mcp error: ${detail}`);
  }
  return payload;
}

async function mcpPost(session: McpSession, message: RpcMessage): Promise<RpcMessage | null> {
  const headers: Record<string, string> = {
    "content-type": "application/json",
    accept: "application/json, text/event-stream",
    authorization: `Bearer ${session.token}`,
  };
  if (session.sessionId !== undefined) headers["mcp-session-id"] = session.sessionId;
  if (session.protocolVersion !== undefined) headers["mcp-protocol-version"] = session.protocolVersion;
  const res = await fetch(MCP_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(message),
    signal: AbortSignal.timeout(RPC_TIMEOUT_MS),
  });
  if (res.status === 401) throw new Error("base mcp rejected the access token (HTTP 401)");
  if (!res.ok) throw new Error(`base mcp request failed: HTTP ${res.status}`);
  const sid = res.headers.get("mcp-session-id");
  if (sid !== null) session.sessionId = sid;
  if (res.status === 202) return null;
  if ((res.headers.get("content-type") ?? "").includes("application/json")) {
    return readRpc((await res.json()) as RpcMessage, session);
  }
  for (const line of (await res.text()).split("\n")) {
    if (!line.startsWith("data:")) continue;
    const data = line.slice(5).trim();
    if (data === "" || data === "[DONE]") continue;
    const msg = readRpc(JSON.parse(data) as RpcMessage, session);
    if (msg.id === message.id || msg.id === undefined) return msg;
  }
  throw new Error("base mcp returned no result");
}

async function callTool(session: McpSession, name: string, args: Record<string, unknown>): Promise<unknown> {
  const msg = await mcpPost(session, {
    jsonrpc: "2.0",
    id: session.nextId++,
    method: "tools/call",
    params: { name, arguments: args },
  });
  if (msg === null) throw new Error(`base mcp ${name} returned no result`);
  return msg.result;
}

function resultFields(result: unknown): Record<string, unknown> {
  const root = asRecord(result) ?? {};
  const structured = asRecord(root.structuredContent);
  if (structured !== null) return { ...root, ...structured };
  if (Array.isArray(root.content)) {
    for (const part of root.content) {
      const text = asRecord(part)?.text;
      if (typeof text !== "string") continue;
      try {
        const parsed = asRecord(JSON.parse(text));
        if (parsed !== null) return { ...root, ...parsed };
      } catch {
        continue;
      }
    }
  }
  return root;
}

function strField(fields: Record<string, unknown>, keys: string[]): string | null {
  for (const key of keys) {
    const value = fields[key];
    if (typeof value === "string" && value !== "") return value;
  }
  return null;
}

type PollState = "signed" | "submitted" | "confirmed" | "declined" | "failed" | "timed_out" | "open";

function normStatus(raw: string): PollState {
  const s = raw.toLowerCase();
  if (s.includes("confirm")) return "confirmed";
  if (s.includes("declin") || s.includes("reject") || s.includes("deni") || s.includes("cancel")) return "declined";
  if (s.includes("fail") || s.includes("error")) return "failed";
  if (s.includes("expir") || s.includes("timeout") || s.includes("timed_out")) return "timed_out";
  if (s.includes("submit")) return "submitted";
  if (s.includes("sign")) return "signed";
  return "open";
}

export default defineTool({
  description:
    "Submit a staged NVDAc sell paper quote via the Uniswap routing API on Base and Base MCP send_calls, then poll get_request_status to confirmed. Fails closed when the quote is missing, mismatched, or expired.",
  inputSchema: executeSellInput,
  approval: always(),
  async *execute(input: ExecuteSellInput) {
    const fail = (reason: string) => ({ ok: false as const, reason });

    const token = process.env.BASE_MCP_ACCESS_TOKEN;
    if (token === undefined || token === "") {
      const out = fail("NO_CONFIG");
      yield out;
      return out;
    }
    const apiKey = process.env.UNISWAP_API_KEY;
    if (apiKey === undefined || apiKey === "") {
      const out = fail("NO_CONFIG");
      yield out;
      return out;
    }

    const pending = await recallPending(input.tenantId);
    if (pending === null) {
      const out = fail("NO_QUOTE");
      yield out;
      return out;
    }
    if (pending.quoteId !== input.quoteId) {
      const out = fail("QUOTE_MISMATCH");
      yield out;
      return out;
    }
    if (pending.side !== "sell") {
      const out = fail("QUOTE_MISMATCH");
      yield out;
      return out;
    }
    if (
      typeof pending.expiresAt !== "string" ||
      !Number.isFinite(Date.parse(pending.expiresAt)) ||
      Date.now() > Date.parse(pending.expiresAt)
    ) {
      const out = fail("QUOTE_EXPIRED");
      yield out;
      return out;
    }
    const rawQuote = asRecord(pending.rawQuote);
    if (rawQuote === null) {
      const out = fail("NO_QUOTE");
      yield out;
      return out;
    }
    const amountIn = typeof pending.payTokens === "string" ? nvdacToBase(pending.payTokens) : null;
    if (amountIn === null) {
      const out = fail("NO_QUOTE");
      yield out;
      return out;
    }
    const rpcUrl = process.env.BASE_RPC_URL;
    const owner = process.env.BASE_ACCOUNT_ADDRESS;
    if (rpcUrl === undefined || rpcUrl === "" || owner === undefined || owner === "") {
      const out = fail("NO_CONFIG");
      yield out;
      return out;
    }
    const funds = await checkFunds({ rpcUrl, token: NVDAC, owner, needRaw: amountIn });
    if (funds !== "ok") {
      const out = fail(funds === "short" ? "INSUFFICIENT_FUNDS" : "RPC_ERROR");
      yield out;
      return out;
    }

    let swap: { to: string; data: string; value: string; chainId: number };
    try {
      swap = await fetchSwap(apiKey, buildSwapBody(rawQuote));
    } catch {
      const out = fail("RPC_ERROR");
      yield out;
      return out;
    }
    if (swap.chainId !== chainId) {
      const out = fail("RPC_ERROR");
      yield out;
      return out;
    }

    const flight: Record<string, unknown> = {
      quoteId: input.quoteId,
      token: pending.token,
      payTokens: pending.payTokens,
      getUsdc: pending.getUsdc,
      to: swap.to,
      data: swap.data,
      value: swap.value,
      chainId: swap.chainId,
      markedAt: new Date().toISOString(),
    };
    if (!(await markInFlight(input.tenantId, flight))) {
      const out = fail("MEMORY_ERROR");
      yield out;
      return out;
    }

    const session: McpSession = { token, nextId: 1 };
    let approvalUrl: string;
    let requestId: string;
    try {
      await mcpPost(session, {
        jsonrpc: "2.0",
        id: session.nextId++,
        method: "initialize",
        params: {
          protocolVersion: "2025-03-26",
          capabilities: {},
          clientInfo: { name: "kiru", version: "0.1.0" },
        },
      });
      await mcpPost(session, { jsonrpc: "2.0", method: "notifications/initialized" });
      const wallets = resultFields(await callTool(session, "get_wallets", {}));
      const wallet = strField(wallets, ["address", "walletAddress", "account"]) ?? process.env.BASE_ACCOUNT_ADDRESS ?? "";
      if (wallet === "") throw new Error("no wallet address for check_approval");
      const approval = await checkApproval(apiKey, { walletAddress: wallet, token: NVDAC, amount: amountIn.toString() });
      if (approval !== null && approval.chainId !== chainId) throw new Error("approval on wrong chain");
      const calls =
        approval === null
          ? [{ to: swap.to, value: swap.value, data: swap.data }]
          : [
              { to: approval.to, value: approval.value, data: approval.data },
              { to: swap.to, value: swap.value, data: swap.data },
            ];
      const sent = await callTool(session, "send_calls", { chain: "base", calls });
      const fields = resultFields(sent);
      const url = strField(fields, ["approvalUrl"]);
      const rid = strField(fields, ["requestId"]);
      if (url === null || !url.startsWith("https://") || rid === null) {
        throw new Error("send_calls returned no approval");
      }
      approvalUrl = url;
      requestId = rid;
      yield { ok: true as const, quoteId: input.quoteId, approvalUrl, requestId, status: "awaiting_approval" };
    } catch {
      await clearInFlight(input.tenantId);
      const out = fail("RPC_ERROR");
      yield out;
      return out;
    }

    const seen = new Set<string>();
    const start = Date.now();
    let txHash: string | null = null;
    let end: "confirmed" | "declined" | "failed" | "timed_out" = "timed_out";
    while (Date.now() - start < POLL_TIMEOUT_MS) {
      let fields: Record<string, unknown>;
      try {
        fields = resultFields(await callTool(session, "get_request_status", { requestId }));
      } catch {
        end = "failed";
        break;
      }
      const state = normStatus(strField(fields, ["status", "state"]) ?? "");
      if (state === "confirmed") {
        txHash = strField(fields, ["txHash", "transactionHash", "tx_hash", "hash"]);
        end = "confirmed";
        break;
      }
      if (state === "declined" || state === "failed" || state === "timed_out") {
        end = state;
        break;
      }
      if ((state === "signed" || state === "submitted") && !seen.has(state)) {
        seen.add(state);
        yield { ok: true as const, quoteId: input.quoteId, requestId, status: state };
      }
      await sleep(POLL_EVERY_MS);
    }

    if (end === "confirmed") {
      await recordFill(input.tenantId, {
        quoteId: input.quoteId,
        token: pending.token,
        side: "sell",
        payTokens: pending.payTokens,
        getUsdc: pending.getUsdc,
        requestId,
        txHash,
        filledAt: new Date().toISOString(),
      });
      await clearInFlight(input.tenantId);
      const parsed = executeSellOutput.safeParse({
        quoteId: input.quoteId,
        approvalUrl,
        requestId,
        status: "confirmed",
        txHash,
      });
      if (!parsed.success) {
        const out = fail("RPC_ERROR");
        yield out;
        return out;
      }
      const out = { ok: true as const, ...parsed.data };
      yield out;
      return out;
    }

    await clearInFlight(input.tenantId);
    const out = fail(end === "declined" ? "DECLINED" : end === "failed" ? "FAILED" : "TIMED_OUT");
    yield out;
    return out;
  },
});
