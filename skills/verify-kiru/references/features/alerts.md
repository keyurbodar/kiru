# Alerts

## Sub-features
- Price alerts set by plain text (token plus direction plus level)
- Scheduler watches the Aerodrome quote path and fires into the same thread
- Alert admits it is approximate (venue quote, not a locked price)
- One text cancels (token or all)

## How to get to it (user POV)
- User sends `alert me when NVDAc is over $200`
- Kiru replies `Alert set: NVDAc over $200. I will text you here.`
- Kiru later sends `NVDAc is over $200 (last $201.10). Send \`buy $50 of NVDAc\` for a live quote.`
- User sends `cancel my NVDAc alert` and Kiru replies `NVDAc alert cancelled.`

## Driving it with control-kiru
Planned PR, not built yet. These commands are the contract:
- `control-kiru send-test "alert me when NVDAc is over $200"` (prints the confirm text)
- `control-kiru send-test "cancel my NVDAc alert"` (prints the cancel text)

## Gotchas
- Alert levels are triggers, not quotes. Always follow with a fresh 30s quote before approve.
- Stale feed means no fire. Skipped checks beat false pings.
- Keep one live alert per token per direction or the thread gets noisy.
