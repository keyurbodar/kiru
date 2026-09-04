# Quote

## Sub-features
- Live price card for a tokenized stock: venue price, what the user pays in USDC, what the user gets in token amount, network fee, and a paper label.
- Aerodrome Sugar CLI quote on Base 8453 as the price source. The venue quote is the price.
- Pending quote held in Sibyl HOT state with a 30 second expiry. Approve must reference a live quote.
- USDC legs shown on both directions: buys pay USDC for tokens, sells pay tokens for USDC.
- Paper default: every card reads `paper` and simulates the fill until live trading is enabled. Nothing moves onchain from a quote alone.
- No-quote path: an illiquid venue returns no price, and Kiru says so plainly instead of inventing one.

## How to get to it (user POV)
- All in the same iMessage thread with Kiru.
- Buy flow. User sends `buy $40 of NVDAc`. Kiru replies `Live price for NVDAc, approve within 30 seconds (paper):` plus a card (`Price $182.40`, `You pay $40.00 USDC`, `You get ~ 0.2193 NVDAc`, `Network fee ~ $0.04`).
- Quote-only flow, no order started. User sends `quote TSLAc 25`. Kiru replies `Live price for TSLAc (paper, no order started):` plus a card (`Price $248.00`, `You pay $25.00 USDC`, `You get ~ 0.1008 TSLAc`, `Network fee ~ $0.04`).
- Sell flow shows the mirrored USDC leg. User sends `sell 0.2193 NVDAc`. Kiru replies `Live price to sell NVDAc, approve within 30 seconds (paper):` plus a card (`Price $182.40`, `You pay 0.2193 NVDAc`, `You get ~ $40.00 USDC`, `Network fee ~ $0.04`).
- Expiry flow. User waits more than 30 seconds, then sends `Approve`. Kiru replies `That quote expired with no fill. Send \`buy $40 of NVDAc\` for a fresh 30 second quote.`
- No-quote flow. User sends `buy $40 of XYZc`. Kiru replies `No quote for XYZc right now, illiquid on venue. Try again later. Nothing was ordered.`

## Driving it with control-kiru
Planned contract, not built yet. These commands are the contract:
- `control-kiru quote NVDAc 40` (prints the same buy card the phone would show, paper labeled)
- `control-kiru quote TSLAc 25` (prints the quote-only card, no order started)
- `control-kiru send-test "buy $40 of NVDAc"` (drives the Eve agent through Photon in a sandbox thread, prints the card plus the 30 second prompt)
- `control-kiru send-test "buy $40 of XYZc"` (prints the no-quote reply)

## Gotchas
- Quote dies in 30s. Rebuild the quote before approve, never execute on an expired one.
- Illiquid returns no quote. Say so plainly, do not invent a price.
- Every card must name both legs (USDC side and token side) or the approve step cannot match the receipt to what was shown.
- Paper label is load bearing. If the card does not read `paper`, do not treat the numbers as a simulated fill.
