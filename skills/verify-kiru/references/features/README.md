# Feature map

## Sub-features
- Intended user POV behavior for Kiru, the iMessage tokenized stocks agent (Eve TS plus Photon channel plus Base MCP send_calls approvalUrl flow plus Aerodrome Sugar CLI quotes plus Sibyl HOT/WARM/COLD memory plus USDC on Base 8453). No code exists yet (pre-PR-000). This map describes what we intend to build.
- One file per feature, one behavior per file, exact user texts kept in each file:

| Feature | File | One-line |
|---|---|---|
| Quote | quote.md | Live price card in chat before anything moves |
| Approve | approve.md | User tap approves the prepared onchain order |
| Portfolio | portfolio.md | Positions and per token basis from memory |
| Alerts | alerts.md | Price alerts that fire back into the thread |
| Recap | recap.md | Scheduled summary and fill history |

## How to get to it (user POV)
- All behavior happens in the same iMessage thread with Kiru. There is no other chat surface.
- Each feature file shows the exact user text on the left and the exact Kiru reply on the right, so a reviewer can type the text and expect the reply.
- Start with `quote.md`, then `approve.md`. The rest (`portfolio.md`, `alerts.md`, `recap.md`) read from the state those two create.

## Driving it with control-kiru
Planned contract, not built yet. These commands are the contract for every feature file:
- `control-kiru quote NVDAc 40` (prints the same card the phone would show)
- `control-kiru send-test "<user text>"` (drives the Eve agent through Photon in a sandbox thread and prints Kiru's reply)
- `control-kiru receipt <hash>` (prints the single fill line the recap links to)

## Gotchas
- Keep user texts exact across files. If `buy $40 of NVDAc` is the example in quote.md, approve.md starts from that same text.
- Venue quote is the price. No second price source gates an order.
- Paper default everywhere until live trading is enabled. Cards read `paper` and nothing moves onchain.
