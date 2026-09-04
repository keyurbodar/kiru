# Kiru

iMessage agent for real tokenized stocks on Base. Text a Photon number,
Eve answers, Base MCP moves money from the user's own Base Account,
Sibyl remembers everything. User keeps custody; the agent never holds keys.

## What makes Kiru special?

1. **The venue is the price.** No parallel feed: Aerodrome quotes via Sugar
   CLI are the price display, the route, and the calldata. Dry-run is a quote.
2. **Approval is the interface.** Every write returns `approvalUrl`; the user
   taps approve in chat, Eve polls status. No signature, no fill, ever.
3. **Memory is the moat.** Sibyl tiers per phone: HOT pending quote, WARM
   positions/basis/thesis, COLD fills journal. Amnesiac bot = no product.
4. **Fail closed.** No pool, restricted region, or missing approval: refuse in
   chat, never guess.

## A note from Keyur

Small focused PRs or it doesn't ship. Past ~20 minutes, split it. Done means
proven over the real path (a dry-run quote, a polled approval), not reasoned
about. Lean and boring: don't rebuild what the venue already enforces. Fast
but never shortcuts. Real money means every fill is traceable to a polled
confirmation.

## Glossary

- **you** = the agent reading this. **plan** = `plan.html` + `pr.tsv`.
- **lane** = your half: keyur = money+memory, shreyash = surface. Review the
  other lane's PRs.
- **quote** = unsigned Aerodrome calldata, shown in chat, dies in 30s.
- **fill** = `send_calls` confirmed via `get_request_status`. Nothing else counts.
- **tenant** = E.164 phone number; the Sibyl `tenant_id`.

## File tree (end-state)

```
eve/agent/       channels/photon.ts  # iMessage (PR-002)
                 tools/              # getPrice getPosition quoteBuy executeBuy
                 schedules/          # alerts.ts recap.ts
                 instructions.md skills/stocks.md  # B20 plugin (PR-009)
miniapp/         stocks/card/        # approve to Filled flip (PR-014)
sibyl-sidecar/   main.py + memory.db # recall/remember/search/record
docs/PRs/        PR-000.md …         # one brief per PR, the task spec
plan.html pr.tsv CONTRIBUTING.md     # vision, queue, workflow
```

Rule: `docs/PRs/PR-XXX.md` is the task. Read it before touching code.

## Parallelism

- Same `parallel_group` letter in `pr.tsv` = run together, different files.
- Same file needs two changes to one agent, one edit. Never two serial edits.
- PR-000 (contracts) first: tool signatures + Sibyl HTTP shapes unblock both
  lanes without meetings.
- No spawn recursion: subagents don't spawn their own.

## Verification (behavior, not types)

- Real path only: dry-run quote parses, approval polls to confirmed, memory
  round-trips (remember to recall). No mocks of money paths.
- Scope checks to the touched tool/route. Never repo-wide suites per change.
- One venue rule: illiquid pair returns "no quote", never a guessed price.
- First live fill is $5 on mainnet, watched start to finish.

## PR discipline

- `pr.tsv` is the queue: 19 PRs, est 20 min or less, tests ride inside each PR.
- Branch per PR id (`pr-008-aerodrome-quote`), conventional commits,
  squash-merge in wave order honoring `depends_on`.
- On merge: `completion_pct` to 100 + note, republish plan page.
- Never make a GitHub PR unless Keyur asks. Never push to `main` directly.

## References (read these, not the world)

- `docs/PRs/` briefs, `plan.html` sections 08 and 09 (stack + tree), `pr.tsv` (queue).
- Base MCP skill: `https://github.com/base/skills/blob/master/skills/base-mcp/SKILL.md`
- Aerodrome plugin: `https://docs.base.org/agents/skills/plugins/aerodrome.md`
- B20/tokenized stocks: `https://docs.base.org/base-chain/asset-issuance/tokenized-stocks-on-base`
- Eve Photon channel: `https://eve.dev/docs/channels/photon`

## Taste

- Venue-enforced means don't rebuild. Deleted code stays deleted.
- One concern per PR. "Also" means split.
- If a rule here fights the task, say so loudly before breaking it.
