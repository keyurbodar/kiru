import { defineTool } from "eve/tools";
import { quoteBuyInput } from "../lib/contracts.js";
import { quoteUsdcToNvdac, stagePendingQuote } from "../lib/routingQuote.js";

export default defineTool({
  description:
    "Build a paper venue quote buying NVDAc with USDC via the Uniswap routing API on Base and stage it HOT as pending_quote (30s expiry). The memory write is best effort and never fails the quote.",
  inputSchema: quoteBuyInput,
  async execute(input) {
    if (input.token !== "NVDAc") return { ok: false as const, reason: "UNKNOWN_TOKEN" };
    const result = await quoteUsdcToNvdac(input.usdcAmount);
    if (result.ok) await stagePendingQuote(input.tenantId, { ...result });
    return result;
  },
});
