# Alerts

## Sub-features
- Price alerts set by plain text: token plus direction (over or under) plus level.
- Scheduler watches the Aerodrome quote path on Base 8453 and fires into the same iMessage thread. The venue quote is the price.
- Alert admits it is approximate (venue quote, not a locked price). Every fire message points back to a fresh 30 second quote.
- Cancel one alert by token, or cancel everything in one text.
- Dry-run priced: a reviewer can price an alert level against the current venue quote without creating a live alert.

## How to get to it (user POV)
- All in the same iMessage thread with Kiru.
- Set flow. User sends `alert me when NVDAc is over $200`. Kiru replies `Alert set: NVDAc over $200. I will text you here. Current venue $182.40, so this is armed, not firing.`
- Under flow. User sends `alert me when TSLAc is under $220`. Kiru replies `Alert set: TSLAc under $220. I will text you here. Current venue $248.00, so this is armed, not firing.`
- Fire flow. When the venue quote crosses the level, Kiru sends `NVDAc is over $200 (last $201.10, venue read, not a locked price). Send \`buy $40 of NVDAc\` for a live 30 second quote.`
- Cancel-one flow. User sends `cancel my NVDAc alert`. Kiru replies `NVDAc alert cancelled. No live alerts on NVDAc.`
- Cancel-all flow. User sends `cancel all alerts`. Kiru replies `All alerts cancelled. You had 2 live: NVDAc over $200, TSLAc under $220.`
- Cancel-nothing flow. User sends `cancel my AAPLc alert` with no AAPLc alert live. Kiru replies `No live AAPLc alert to cancel. Send \`alert me when AAPLc is over $210\` to set one.`

## Driving it with control-kiru
Planned contract, not built yet. These commands are the contract:
- `control-kiru send-test "alert me when NVDAc is over $200"` (prints the set confirm text with the current venue read)
- `control-kiru send-test "cancel my NVDAc alert"` (prints the cancel-one text)
- `control-kiru send-test "cancel all alerts"` (prints the cancel-all text with the count)
- `control-kiru alert-dry-run NVDAc 200` (prices the level against the live venue quote with no alert created, prints `would fire now` or `armed, not firing`)

## Gotchas
- Alert levels are triggers, not quotes. Always follow a fire with a fresh 30s quote before approve.
- Stale feed means no fire. Skipped checks beat false pings.
- Keep one live alert per token per direction or the thread gets noisy.
- Dry-run never creates state. If the level needs watching, set it with the plain text flow after the dry-run.
