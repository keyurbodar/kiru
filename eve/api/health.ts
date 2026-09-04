import type { IncomingMessage, ServerResponse } from "node:http";
import { createRequire } from "node:module";
import { agentEntrypoint } from "../agent/index";

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
  sendJson(res, 200, { status: agentEntrypoint ? "ok" : "error", version });
}
