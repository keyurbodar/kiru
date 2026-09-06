import { defineTool } from "eve/tools";
import { quoteBuyInput } from "../lib/contracts.js";
import { quoteUsdcToToken } from "../lib/routingQuote.js";
import { resolveToken, verifyToken } from "../lib/tokens.js";

export default defineTool({
  description:
    "Read-only venue price for a venue token in USDC via the Uniswap routing API on Base. Writes nothing to memory.",
  inputSchema: quoteBuyInput,
  async execute(input) {
    const rpcUrl = process.env.BASE_RPC_URL;
    const ref = await resolveToken(input.token, rpcUrl === "" ? undefined : rpcUrl);
    if (ref === null) return { ok: false as const, reason: "UNKNOWN_TOKEN" };
    let decimals = ref.decimals;
    if (rpcUrl !== undefined && rpcUrl !== "") {
      const verified = await verifyToken(ref.address, rpcUrl);
      if (verified !== null) decimals = verified.decimals;
    }
    return quoteUsdcToToken(input.usdcAmount, {
      symbol: ref.symbol,
      address: ref.address,
      decimals: decimals ?? 18,
    });
  },
});
