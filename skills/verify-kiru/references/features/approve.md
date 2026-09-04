# Approve

## Sub-features
- Every order needs a user yes. Nothing moves without it.
- Base MCP send_calls approvalUrl flow, signed in the user Base Account. The approval card carries the link, and the tap opens the signing screen.
- Self custody: assets live in the user account, never on our server.
- YES text path (proposed, under review): replying `YES` in the thread would confirm the same pending quote as tapping the card. Tap is canonical until the text path is decided.
- Poll-then-confirm: after the user signs, Kiru polls the send_calls status, then confirms with a fill receipt. Kiru never claims a fill before the poll returns success.
- Cancel path: the user can stop the order any time before the fill with `cancel` or `no`.
- No-expiry path: the approval request itself carries no countdown. The 30 second timer belongs to the quote only. A late tap on a dead quote is a cancel with a re-quote prompt, not a fill.
- Fill receipt rendered back through Photon into the same iMessage thread.

## How to get to it (user POV)
- All in the same iMessage thread with Kiru.
- Happy path. User sends `buy $40 of NVDAc` and gets the 30 second quote card. Kiru follows it with an approval card: `Approve this order (paper):` plus (`Pay $40.00 USDC for ~ 0.2193 NVDAc`, `Tap to sign: <approvalUrl>`).
- User taps the link and signs in the Base Account. Kiru polls, then replies `Filled (paper): 0.2193 NVDAc for $40.00 USDC. Held in your Base Account.`
- YES text path (proposed). User sends `YES` within the 30 seconds instead of tapping. Kiru replies `Confirmed YES (paper). Opening the same signing step: Tap to sign: <approvalUrl>`, then polls and confirms with the same `Filled (paper)` receipt. If the text path is rejected in review, Kiru instead replies `Tap the signing link to approve. I do not take YES as approval yet.`
- Cancel path. User sends `cancel` or `no` before signing. Kiru replies `Order cancelled, nothing moved. Send \`buy $40 of NVDAc\` for a fresh quote.`
- Expiry path. User taps after the 30 seconds lapsed, or sends `Approve` late. Kiru replies `That quote expired with no fill. Send \`buy $40 of NVDAc\` for a fresh 30 second quote.`
- Signed-but-never path. User opens the approval card and never signs. Kiru sends nothing further and moves nothing. Next user text gets a normal reply plus `Your earlier order is still unsigned. Send \`cancel\` to drop it or \`buy $40 of NVDAc\` for a fresh quote.`

## Driving it with control-kiru
Planned contract, not built yet. These commands are the contract:
- `control-kiru send-test "buy $40 of NVDAc"` (starts the order, prints the quote card plus the approvalUrl card)
- `control-kiru send-test "YES"` (prints the proposed YES-path reply against the pending quote)
- `control-kiru send-test "cancel"` (prints the cancel reply)
- `control-kiru receipt <hash>` (fetches the fill and renders the receipt text the poll-then-confirm step would send)

## Gotchas
- Approval needs the user tap before polling. Never poll send_calls status before the approvalUrl is opened.
- Expired quote means re-quote first. The tap on a dead card is a cancel, not a fill.
- USDC leg must be explicit in the card so the receipt matches what was approved.
- Never claim a fill from the tap alone. Tap, then poll, then receipt, in that order.
