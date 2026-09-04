# Portfolio

## Sub-features
- Portfolio mini card live in the conversation: per token shares held, priced at the current venue quote, plus USDC balance and a total.
- Positions priced from the venue (Aerodrome Sugar CLI quote on Base 8453) at read time. The venue quote is the price.
- Per token average cost (basis) from Sibyl WARM entities. Every fill appends to the record so the next basis answer stays correct.
- Cash out to USDC whenever the user wants, through the normal quote then approve flow.
- Outside US only, eligibility checked up front before any balance shows.
- Empty state: with no fills and no balances, Kiru says so plainly instead of guessing.

## How to get to it (user POV)
- All in the same iMessage thread with Kiru.
- Full card. User sends `portfolio`. Kiru replies with a mini card (`NVDAc 0.2193 @ $182.40 avg`, `USDC 22.40`, `Total ~ $62.40 (paper prices)`).
- Basis question. User sends `what is my NVDAc basis?`. Kiru replies `Your NVDAc basis: 0.2193 shares @ $182.40 avg, remembered by Sibyl (WARM entities/). Current venue $182.40, worth ~ $40.00.`
- Empty state. User sends `portfolio` with no fills yet. Kiru replies `No positions yet. No fills in your journal. Send \`quote NVDAc 40\` for a live price to start.`
- Missing basis record. User sends `what is my AAPLc basis?` with no WARM entity for AAPLc. Kiru replies `I have no AAPLc basis on file. Tell me what you hold and I will track it from the next fill.`
- Cash out. User sends `sell all NVDAc`. Kiru replies `Live price to sell NVDAc, approve within 30 seconds (paper):` plus a card (`Price $182.40`, `You pay 0.2193 NVDAc`, `You get ~ $40.00 USDC`, `Network fee ~ $0.04`), then the normal approval card follows.

## Driving it with control-kiru
Planned contract, not built yet. These commands are the contract:
- `control-kiru send-test "portfolio"` (reads venue prices plus WARM entities, prints the mini card text)
- `control-kiru send-test "what is my NVDAc basis?"` (reads the WARM entity, prints the basis reply)
- `control-kiru send-test "sell all NVDAc"` (prints the sell-side quote card with the USDC leg)

## Gotchas
- Positions need a live venue price and basis needs a WARM entity. No record means ask what they hold, do not guess.
- Every fill must append to the record or the next basis answer is wrong.
- Eligibility is checked before any balance shows, not after.
- Portfolio prices are venue reads at answer time, not locked quotes. Only the 30 second quote card can be approved.
