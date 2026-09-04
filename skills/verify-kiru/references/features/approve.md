# Approve

## Sub-features
- Every order needs a user yes. Nothing moves without it.
- Base MCP send_calls approvalUrl flow, signed in the user Base Account
- Self custody: assets live in the user account, never on our server
- Fill receipt rendered back through Photon into the same iMessage thread

## How to get to it (user POV)
- User sends `buy $50 of NVDAc`, gets the 30 second quote card
- User sends `Approve`
- Kiru replies `Filled: 0.2741 NVDAc for $50.00 USDC. Held in your Base Account.`
- User sends `no` or lets the 30s lapse: Kiru replies `Order cancelled, nothing moved. Send \`buy $50 of NVDAc\` for a fresh quote.`

## Driving it with control-kiru
Planned PR, not built yet. These commands are the contract:
- `control-kiru send-test "buy $50 NVDAc"` (starts the order, prints the approvalUrl)
- `control-kiru receipt <hash>` (fetches the fill and renders the receipt text)

## Gotchas
- Approval needs the user tap before polling. Never poll send_calls status before the approvalUrl is opened.
- Expired quote means re-quote first. The tap on a dead card is a cancel, not a fill.
- USDC leg must be explicit in the card so the receipt matches what was approved.
