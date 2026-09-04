---
name: base-mcp
description: How Eve connects to Base MCP and handles approvals.
---

# Base MCP

Kiru's record of how Eve uses Base MCP. Upstream skill is reference only. This file is the behavior Eve follows.

## Connect

- Server: https://mcp.base.org (root, no path suffix).
- Transport: Streamable HTTP.
- Auth: OAuth 2.1 authorization code with PKCE, public client through Base Account. No client secret lives in this repo.
- Scopes: `agent_wallet:transact` and `agent_wallet:escalate`.
- Discovery uses `/.well-known/oauth-authorization-server` on the same host.

## Boot behavior

Eve runs the MCP handshake at agent boot. On success it prints the tool list from the server. If no Base MCP tool is callable, the server is not connected: stop and tell the user to connect before doing onchain work.

## Approval flow

Every write call returns an `approvalUrl` plus a `requestId`.

1. Call the write tool and keep the `requestId`.
2. Show the link in chat as Approve Transaction so the user can tap it.
3. Wait for the user to confirm they approved in Base Account.
4. Poll `get_request_status` with the `requestId`.
5. Report success only when the status tool confirms completion.

Rules:

- Signing stays in Base Account. Keys never touch our servers.
- An unsigned payload is never a fill. Only a confirmed status counts.
- Never report success before the status check passes.
- Never skip the approval link. Without user action the action cannot complete.
