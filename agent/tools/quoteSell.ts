import { defineTool } from "eve/tools";
import { quoteSellInput } from "../lib/contracts.js";
import { quoteNvdacToUsdc, stagePendingSellQuote } from "../lib/routingQuote.js";

export default defineTool({
  description:
    "Build a paper venue quote selling NVDAc for USDC via the Uniswap routing API on Base and stage it HOT as pending_quote (30s expiry). The memory write is best effort and never fails the quote.",
  inputSchema: quoteSellInput,
  async execute(input) {
    if (input.token !== "NVDAc") return { ok: false as const, reason: "UNKNOWN_TOKEN" };
    const result = await quoteNvdacToUsdc(input.tokenAmount);
    if (result.ok) await stagePendingSellQuote(input.tenantId, { ...result });
    return result;
  },
});
