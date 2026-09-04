# Quote

## Sub-features
- Live price card for a tokenized stock (price, you pay in USDC, you get approx amount, network fee)
- Aerodrome Sugar CLI quote on Base 8453 as the price source
- Pending quote held in Sibyl HOT state with a 30 second expiry

## How to get to it (user POV)
- User sends `buy $50 of NVDAc`
- Kiru replies `Live price for NVDAc, approve within 30 seconds:` plus a card (`Price $182.40`, `You pay $50.00 USDC`, `You get ~ 0.2741 NVDAc`, `Network fee ~ $0.04`)
- User sends `quote TSLAc 25` to get a card without starting an order
- Illiquid token: Kiru replies `No quote for XYZc right now, illiquid on venue. Try again later.`

## Driving it with control-kiru
Planned PR, not built yet. These commands are the contract:
- `control-kiru quote NVDAc 50` (prints the same card the phone would show)
- `control-kiru send-test "buy $50 NVDAc"` (drives the Eve agent through Photon in a sandbox thread)

## Gotchas
- Quote dies in 30s. Rebuild the quote before approve, never execute on an expired one.
- Illiquid returns no quote. Say so plainly, do not invent a price.
