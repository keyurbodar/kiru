import { defineTool } from "eve/tools";
import { quoteBuyInput } from "../lib/contracts.js";
import { quoteUsdcToNvdac } from "../lib/uniswapQuote.js";

export default defineTool({
  description:
    "Read-only venue price for NVDAc in USDC via Uniswap V3 QuoterV2 dry-run on Base. Writes nothing to memory.",
  inputSchema: quoteBuyInput,
  async execute(input) {
    if (input.token !== "NVDAc") return { ok: false as const, reason: "UNKNOWN_TOKEN" };
    return quoteUsdcToNvdac(input.usdcAmount);
  },
});
