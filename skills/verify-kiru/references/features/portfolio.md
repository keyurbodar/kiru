# Portfolio

## Sub-features
- Portfolio mini card live in the conversation (per token shares held)
- Per token average cost from Sibyl WARM entities
- Cash out to dollars (USDC) whenever the user wants
- Outside US only, eligibility checked up front

## How to get to it (user POV)
- User sends `what's my NVDAc basis?`
- Kiru replies `Your NVDAc basis: 0.2741 shares @ $182.40 avg, remembered by Sibyl (WARM entities/).`
- User sends `portfolio`
- Kiru replies with a mini card (`NVDAc 0.2741 @ $182.40 avg`, `USDC 12.50`, `Total ~ $62.50`)
- User sends `sell all NVDAc` to cash out to USDC

## Driving it with control-kiru
Planned PR, not built yet. These commands are the contract:
- `control-kiru send-test "what's my NVDAc basis?"` (reads WARM entities, prints the reply)
- `control-kiru send-test "portfolio"` (prints the mini card text)

## Gotchas
- Basis needs a WARM entity or ask. No record means ask what they hold, do not guess.
- Every fill must append to the record or the next basis answer is wrong.
- Eligibility is checked before any balance shows, not after.
