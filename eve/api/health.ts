import type { IncomingMessage, ServerResponse } from "node:http";
import { createRequire } from "node:module";

// Framework-free on purpose. Importing the agent entrypoint here pulls
// eve/tools into the serverless bundle, which Vercel file tracing cannot
// package. The entrypoint stays exported from agent/index.ts for the
// Photon channel, which runs where the framework resolves.
const require = createRequire(import.meta.url);
const { version } = require("../package.json") as { version: string };

function sendJson(res: ServerResponse, statusCode: number, body: unknown): void {
  res.writeHead(statusCode, { "content-type": "application/json" });
  res.end(JSON.stringify(body));
}

export default function handler(req: IncomingMessage, res: ServerResponse): void {
  if (req.method !== "GET") {
    res.writeHead(405, { "content-type": "application/json", allow: "GET" });
    res.end(JSON.stringify({ error: "method not allowed" }));
    return;
  }
  sendJson(res, 200, { status: "ok", version });
}
