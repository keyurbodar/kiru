# stocks: venue money loop (Base 8453)

1. Reads (only sources): `getPosition` for shares and basis plus the getPrice venue price read. Nothing else prices or balances.
2. Prepare: `quoteBuy` builds the venue route and returns `quoteId`. Execute exactly that route, never a re-derived one.
3. Execute: `executeBuy` takes `quoteId` and returns `approvalUrl` plus `requestId`. The user signs through the approval flow, then poll `get_request_status` to confirmed. A tap alone is never a fill.
4. Settle: USDC legs on Base `chainId` 8453. Buys pay USDC for tokens, sells pay tokens for USDC. Amounts settle in USDC; memory never moves money.
Rule: no custom gates. No eligibility, region, or limit checks live in the agent. The venue and the token allowlist enforce. Off-venue requests get the outside-venue refusal in chat, never a guess.
Memory side: HOT pending quote and order state plus WARM positions and COLD fills via `tenant_id` scoped `/recall`, `/remember`, `/search`, `/record` in `sibyl-sidecar/contract.md`. Money shapes in `agent/lib/contracts.ts`.
