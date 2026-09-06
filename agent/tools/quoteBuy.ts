import { defineTool } from "eve/tools";
import { quoteBuyInput } from "../lib/contracts.js";
import { quoteUsdcToToken, stagePendingQuote } from "../lib/routingQuote.js";
import { resolveToken, verifyToken } from "../lib/tokens.js";

export default defineTool({
  description:
    "Build a paper venue quote buying a venue token with USDC via the Uniswap routing API on Base and stage it HOT as pending_quote (30s expiry). The memory write is best effort and never fails the quote.",
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
    const result = await quoteUsdcToToken(input.usdcAmount, {
      symbol: ref.symbol,
      address: ref.address,
      decimals: decimals ?? 18,
    });
    if (result.ok) await stagePendingQuote(input.tenantId, { ...result });
    return result;
  },
});
