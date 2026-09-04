# Recap

## Sub-features
- On-demand summary: `recap` or `what did I buy?` answered any time in the thread.
- Weekly push: Monday morning summary delivered into the same iMessage thread without being asked.
- Fill history sourced from the Sibyl COLD journal (append only audit trail), never from chat memory or the quote log.
- Basis lines sourced from Sibyl WARM entities. History comes from COLD, averages come from WARM.
- Each fill line links back to its receipt.
- Empty state: an empty journal gets a plain `No fills yet`, never a fabricated summary.

## How to get to it (user POV)
- All in the same iMessage thread with Kiru.
- On-demand short form. User sends `what did I buy?`. Kiru replies `This week: 0.2193 NVDAc for $40.00 USDC (Mon), no sells. Basis NVDAc @ $182.40 avg.`
- On-demand keyword. User sends `recap`. Kiru replies `Paper recap: 1 fill, 0.2193 NVDAc, spent $40.00 USDC, no sells. Basis NVDAc @ $182.40 avg. Reply \`portfolio\` for the card.`
- Weekly push. Monday morning Kiru sends `Weekly recap (paper): 1 fill, 0.2193 NVDAc, spent $40.00 USDC. Reply \`portfolio\` for the card or \`recap\` for fill lines.`
- Multi-fill week. User sends `recap`. Kiru replies `Paper recap: 2 fills, 0.2193 NVDAc for $40.00 USDC (Mon), 0.1008 TSLAc for $25.00 USDC (Thu), no sells. Total spent $65.00 USDC.`
- Empty state. User sends `recap` with an empty journal. Kiru replies `No fills yet. Your journal is empty. Send \`quote NVDAc 40\` for a live price to start.`

## Driving it with control-kiru
Planned contract, not built yet. These commands are the contract:
- `control-kiru send-test "what did I buy?"` (reads the COLD journal, prints the short-form reply)
- `control-kiru send-test "recap"` (reads COLD for fills plus WARM for basis, prints the recap reply)
- `control-kiru receipt <hash>` (prints the single fill line the recap links to)

## Gotchas
- Journal is append only. Never edit a fill line, add a correcting entry instead.
- Empty journal means say so (`No fills yet.`), do not summarize the quote log.
- Recap reads WARM for basis and COLD for history. Mixing them up gives wrong averages.
- Weekly push and on-demand read the same journal. If the two disagree, the journal query changed between them, so re-read COLD and fix the query, not the text.
