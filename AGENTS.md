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

## A note from me

Small focused PRs or it doesn't ship. Past ~20 minutes, split it. Done means
proven over the real path (a dry-run quote, a polled approval), not reasoned
about. Lean and boring: don't rebuild what the venue already enforces. Fast
but never shortcuts. Real money means every fill is traceable to a polled
confirmation.

## Glossary

- **you** = the agent reading this. **plan** = `plan.html`.
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
plan.html CONTRIBUTING.md          # vision, workflow; issues #1-19 are the queue
```

Rule: the issue brief is the task. Read it before touching code.

## Live infra (provisioned, don't recreate)

- Photon project `kiru` id `3d8ab560-41f6-4749-9d0e-49b4152aa396`, platform
  imessage on, free shared pool. Agent number `+14158505302`, assigned to
  the owner user (contact details shared out of band).
- Secret lives in env (`PHOTON_PROJECT_ID`, project secret), shared out of
  band, never committed. `lines add` is Business-only; free tier provisions
  per-user shared numbers via `spectrum users add`, so don't touch lines.
- Test path: Mac Messages (Apple ID email) gets full iMessage. Nothing
  answers until Eve is wired.

## Parallelism

- Always maximize parallel background agents and keep working yourself meanwhile.
- Same file needs two changes: one agent, one edit.
- Plan feat1 plus feat2 first, then implement both in one edit.
- Contradicting output re-makes the plan: quality over shortcuts, goals may change.
- Never wait idle for agents.
- No spawn recursion: subagents do not spawn their own.

## How to work

- Use poteto-mode for every task you run.
- Skill: `/Users/keyur/.agents/skills/poteto-mode/SKILL.md`.
## Verification (behavior, not types)

- Real path only: dry-run quote parses, approval polls to confirmed, memory
  round-trips (remember to recall). No mocks of money paths.
- Scope checks to the touched tool/route. Never repo-wide suites per change.
- Use /poteto-mode to verify things.

## PR discipline

- Issues #1-19 are the queue: 19 PRs, est 20 min or less, tests ride inside each PR.
- Work from the issue. Branch per issue id (`pr-008-aerodrome-quote`),
  conventional commits, squash-merge in wave order honoring Depends.
- On merge: close the issue.
- Never make a GitHub PR unless I ask. Never push to `main` directly.

## Issues are a draft

- You have full autonomy over issues: update bodies, add new issues and PRs,
  remove ones that stop making sense.
- Architecture and feature decisions may change mid-build. When that happens,
  discuss with me first, then implement the real best solution. Never build
  just because the upfront plan says so.
- A better or faster method than planned: stop, breathe, and suggest the
  option before continuing.
## References (read these, not the world)

- Issues list (queue; briefs live in the issue bodies): `https://github.com/keyurbodar/kiru/issues`, `plan.html` sections 08 and 09 (stack + tree).
- Photon CLI: `photon --help`, projects/lines/users for numbers and provisioning.
- Alchemy CLI: `alchemy --help`, agent-prompt, `--json --no-interactive` for scripted calls.
- Eve docs channels/photon: `https://eve.dev/docs/channels/photon`
- Eve docs deployment/vercel: `https://eve.dev/docs/deployment/vercel`
- Base MCP skill: `https://github.com/base/skills/blob/master/skills/base-mcp/SKILL.md`
- Aerodrome plugin: `https://docs.base.org/agents/skills/plugins/aerodrome.md`
- B20 tokenized stocks guide: `https://docs.base.org/base-chain/asset-issuance/tokenized-stocks-on-base`
- Photon Vercel Eve iMessage example: `https://github.com/photon-hq/vercel-eve-imessage-example.git`
- Sibyl memory docs (recall/remember/search/record, HOT/WARM/COLD tiers).
- Feature map `skills/verify-kiru/references/features/` (read before building user-facing flows).

## Coding style

- Names are meaningful, short, and human: no AI-looking prefixes or suffixes.
- No redundant temporaries: compose calls (`c = g(f(a))`).
- Under 20 lines used once: inline. Over 20 lines: refactor on need. Under 20 reused: function.
- Order: imports, enums, structs, logic.
- No em dashes in code or prose.
- No unused vars or files: remove before bloat.
- Max 1000 lines per file: directory trees over crowded dirs.
- Stuck in a loop: reassess instead of retrying blind.

## PR Creator

- Re-read your own diff end to end as a zero-knowledge intern: intent match, tests constrain not mirror, flag review items.
- Run no-comments (`/Users/keyur/.agents/skills/no-comments/`) before every review. Authoring agents defend comments; the sicko does not.
- No claude, ai, or self references anywhere, including co-author lines.
- PR bodies are very detailed for senior plus security review: implementation, files, test outputs, todos, context.

## Taste

- Venue-enforced means don't rebuild. Deleted code stays deleted.
- One concern per PR. "Also" means split.
- If a rule here fights the task, say so loudly before breaking it.
