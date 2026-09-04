# Setup for Shreyash (surface lane)

You own surface: Eve agent, Photon texting, Vercel deploy, approval card,
Mini App, polish, recap. Keyur owns money + memory. Contract first: read
issue #1 (`[PR-000] Eve tool + Sibyl HTTP contracts`) before touching
anything; code your tools against those signatures with stubs.

## Machine

- Node 22+ (`node --version`), bun (`bun --version`).
- Vercel CLI: `npm i -g vercel`, then `vercel login` (your own account).
- Eve: no install needed, runs via `npx eve@latest` inside the repo.
- No Python, no Sibyl, no Alchemy key needed on your side. Ever.

## Repo

```bash
git clone https://github.com/keyurbodar/kiru.git
cd kiru
git checkout -b pr-001-eve-init
```

Your issues, in order: #2 (Eve init) → #3 (Photon texting) + #4 (Vercel deploy,
parallel) → #13 → #14 → #15 → #16 → #19. Branch per issue (`pr-XXX-slug`),
conventional commits, PR back to `main`. Other lane reviews: Keyur reviews
yours.

## Credentials you need

- Photon: ask Keyur for `PHOTON_PROJECT_ID` + project secret (his project,
  shared out of band, never commit). Needed from #3 onward.
- Vercel: your own login. `eve link` inside the Eve app dir when you reach #4.
- Base MCP / Sibyl / Alchemy: NOT needed. Money tools stay stubs returning the
  shapes from #1 until Keyur's side lands; wave 3 is the only joint.

## Verify each step

- After #2: `npx eve dev` boots, `agent/` layout matches `plan.html` section 09.
- After #3: text the shared line from your phone, Eve echo replies.
- After #4: `curl https://<your-app>/eve/v1/health` returns ok.
- Never touch `sibyl-sidecar/`, money tools internals, or `send_calls`.
