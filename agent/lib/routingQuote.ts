import { randomBytes } from "node:crypto";
import { quoteBuyOutput, type QuoteBuyOutput } from "./contracts.js";

// Uniswap routing API venue quote: USDC -> NVDAc on Base (chain 8453).
// POST /v1/quote is the price. A response with no route means no quote,
// never a guess. Key and swapper stay in env, never in the diff.

export const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
export const NVDAC = "0xb20000000000000000000078ee7ce2fE4908108C";
const NVDAC_DECIMALS = 8;
const QUOTE_URL = "https://trade-api.gateway.uniswap.org/v1/quote";
const QUOTE_TTL_MS = 30_000;

export type QuoteResult =
  | ({ ok: true } & QuoteBuyOutput)
  | { ok: false; reason: "NO_CONFIG" | "RPC_ERROR" | "NO_QUOTE" };

function usdcToBase(s: string): bigint | null {
  const m = /^(\d+)(?:\.(\d{1,6}))?$/.exec(s);
  if (!m) return null;
  const v = BigInt(m[1]) * 1_000_000n + BigInt((m[2] ?? "").padEnd(6, "0"));
  return v > 0n ? v : null;
}

function formatUnits(value: bigint, decimals: number, maxDp: number): string {
  const base = 10n ** BigInt(decimals);
  const frac = (value % base).toString().padStart(decimals, "0").slice(0, maxDp).replace(/0+$/, "");
  return frac ? `${value / base}.${frac}` : `${value / base}`;
}

function truncUsd(s: string): string | null {
  const m = /^(\d+)(?:\.(\d+))?$/.exec(s);
  if (!m) return null;
  const frac = (m[2] ?? "").slice(0, 6).replace(/0+$/, "");
  return frac ? `${m[1]}.${frac}` : m[1];
}

function parseOut(s: unknown): bigint {
  if (typeof s !== "string" || !/^\d+$/.test(s)) return 0n;
  try {
    return BigInt(s);
  } catch {
    return 0n;
  }
}

interface RoutingQuote {
  output?: { amount?: unknown; minimumAmount?: unknown };
  gasFeeUSD?: unknown;
  quoteId?: unknown;
}

export async function quoteUsdcToNvdac(usdcAmount: string): Promise<QuoteResult> {
  const key = process.env.UNISWAP_API_KEY;
  const swapper = process.env.KIRU_SWAPPER;
  if (!key || !swapper) return { ok: false, reason: "NO_CONFIG" };
  const amountIn = usdcToBase(usdcAmount);
  if (amountIn === null) return { ok: false, reason: "NO_QUOTE" };
  let res: Response;
  try {
    res = await fetch(QUOTE_URL, {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "x-permit2-disabled": "true" },
      body: JSON.stringify({
        type: "EXACT_INPUT",
        amount: amountIn.toString(),
        tokenIn: USDC,
        tokenOut: NVDAC,
        tokenInChainId: 8453,
        tokenOutChainId: 8453,
        swapper,
        autoSlippage: "DEFAULT",
        protocols: ["V4", "V3", "V2"],
        routingPreference: "BEST_PRICE",
      }),
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    return { ok: false, reason: "RPC_ERROR" };
  }
  if (!res.ok) return { ok: false, reason: "NO_QUOTE" };
  let body: { quote?: RoutingQuote };
  try {
    body = (await res.json()) as typeof body;
  } catch {
    return { ok: false, reason: "NO_QUOTE" };
  }
  const amountOut = parseOut(body.quote?.output?.amount);
  if (amountOut <= 0n) return { ok: false, reason: "NO_QUOTE" };
  const getTokens = formatUnits(amountOut, NVDAC_DECIMALS, 8);
  if (getTokens === "0") return { ok: false, reason: "NO_QUOTE" };
  const priceUsdc = formatUnits((amountIn * 10n ** BigInt(NVDAC_DECIMALS)) / amountOut, 6, 6);
  const feeRaw = typeof body.quote?.gasFeeUSD === "string" ? truncUsd(body.quote.gasFeeUSD) : null;
  const venueId = typeof body.quote?.quoteId === "string" ? body.quote.quoteId : "";
  return quoteBuyOutput.parse({
    quoteId: venueId.length > 0 && venueId.length <= 64 ? venueId : `q_${Date.now().toString(36)}_${randomBytes(8).toString("hex")}`,
    token: "NVDAc",
    priceUsdc,
    payUsdc: usdcAmount,
    getTokens,
    feeUsdc: feeRaw ?? "0",
    expiresAt: new Date(Date.now() + QUOTE_TTL_MS).toISOString(),
    paper: true,
  }) as QuoteResult;
}

// Stage the quote HOT as pending_quote. Best effort: a memory failure never
// fails the quote itself.
export async function stagePendingQuote(
  tenantId: string,
  quote: QuoteBuyOutput,
): Promise<boolean> {
  const base = process.env.SIBYL_SIDECAR_URL ?? "http://localhost:8000";
  try {
    const res = await fetch(`${base}/remember`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        tenant_id: tenantId,
        category: "state",
        name: "pending_quote",
        body: { ...quote },
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return false;
    const body = (await res.json()) as { ok?: boolean };
    return body.ok === true;
  } catch {
    return false;
  }
}
