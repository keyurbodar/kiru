# Sibyl sidecar HTTP contract

Base URL: the Fly sidecar origin (no path prefix). All routes are `POST` with a
JSON body and return JSON. `tenant_id` is the caller E.164 phone number and
scopes every read and write. Amounts that cross into Eve money tools settle in
USDC on Base chain 8453; memory itself never moves money. Writes that start an
order return no fill: the fill arrives later through the Base MCP `approvalUrl`
flow and is polled with `get_request_status`, never inferred from a tap.

## Tier mapping

| Tier | Store | What Kiru keeps there |
|---|---|---|
| HOT | `state/` | Pending quote and in-progress order per tenant (`category: "state"`, `name: "pending_quote"` or `"order_in_flight"`). Rewritten in place, 30 second quote expiry enforced by the reader. |
| WARM | `entities/` | Positions and per-token basis, one record per token (`category: "positions"`, `name: "<TOKEN>"`, body holds shares and average cost). |
| COLD | `journal/` | Fills journal, append-only via `record`. The audit trail behind every fill receipt. |

## POST /recall

Read one entity by exact key (WARM) or one HOT state document when
`category` is `"state"`.

Request:

```json
{ "tenant_id": "+14158505302", "category": "positions", "name": "NVDAc" }
```

Response (found):

```json
{
  "ok": true,
  "entity": {
    "tenant_id": "+14158505302",
    "category": "positions",
    "name": "NVDAc",
    "body": { "shares": "0.2193", "avg_cost_usdc": "182.40" },
    "updated_at": "2026-09-04T00:00:00.000Z"
  }
}
```

Response (missing): `{ "ok": false, "code": "NOT_FOUND", "category": "positions", "name": "NVDAc" }`.

## POST /remember

Write one entity (WARM) or one HOT state document when `category` is
`"state"`. Idempotent on `(tenant_id, category, name)`: a repeat write with
the same key replaces the body.

Request:

```json
{
  "tenant_id": "+14158505302",
  "category": "positions",
  "name": "NVDAc",
  "body": { "shares": "0.2193", "avg_cost_usdc": "182.40" }
}
```

Response: `{ "ok": true, "category": "positions", "name": "NVDAc" }`.

## POST /search

Full-text search across tiers for one tenant.

Request:

```json
{ "tenant_id": "+14158505302", "query": "NVDAc basis", "limit": 10, "tiers": "entity,journal" }
```

`limit` defaults to 10 (max 50). `tiers` is an optional comma-separated filter
over `entity`, `state`, `reference`, `journal`; omit to search all tiers.

Response:

```json
{
  "ok": true,
  "query": "NVDAc basis",
  "count": 1,
  "results": [
    { "tier": "entity", "category": "positions", "name": "NVDAc", "body": { "shares": "0.2193" } }
  ]
}
```

Zero hits return `"count": 0` with an explanatory `verdict` object naming the
cause (`empty_store`, `no_match`, `gated`, `negation_abstain`, or
`abstained_on`) and the recovery to try next.

## POST /record

Append one COLD journal event (fills, decisions, observations). Append-only:
never overwrites or deletes.

Request:

```json
{
  "tenant_id": "+14158505302",
  "kind": "fill",
  "body": { "token": "NVDAc", "shares": "0.2193", "pay_usdc": "40.00" },
  "category": "positions",
  "name": "NVDAc"
}
```

`category` and `name` are optional links back to the WARM entity the event is
about. Response: `{ "ok": true, "event_id": "evt_01", "kind": "fill" }`.

## Errors

Failure envelope: `{ "ok": false, "code": "<CAUSE>", "message": "<detail>" }`.
Unknown `tenant_id` shape, bad tier filter, or oversize body fails closed with
`ok: false`; the caller refuses in chat rather than guessing.
