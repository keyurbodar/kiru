# Recap

## Sub-features
- Scheduled summary of fills and positions, delivered in thread
- Fill history from Sibyl COLD journal (append only audit trail)
- Answers `what did I buy?` from the journal, not from chat memory
- Links each line back to its receipt

## How to get to it (user POV)
- User sends `what did I buy?`
- Kiru replies `This week: 0.2741 NVDAc for $50.00 USDC (Mon), no sells. Basis NVDAc @ $182.40 avg.`
- Monday morning Kiru sends `Weekly recap: 1 fill, 0.2741 NVDAc, spent $50.00 USDC. Reply \`portfolio\` for the card.`
- User sends `recap` anytime for the same summary on demand

## Driving it with control-kiru
Planned PR, not built yet. These commands are the contract:
- `control-kiru send-test "what did I buy?"` (reads COLD journal, prints the reply)
- `control-kiru receipt <hash>` (prints the single fill line the recap links to)

## Gotchas
- Journal is append only. Never edit a fill line, add a correcting entry instead.
- Empty journal means say so (`No fills yet.`), do not summarize the quote log.
- Recap reads WARM for basis and COLD for history. Mixing them up gives wrong averages.
