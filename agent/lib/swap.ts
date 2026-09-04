// Uniswap trade API swap calldata on Base chain 8453. POST /v1/swap reuses
// the flat /quote response object minus null or undefined entries. The route
// is never re-derived here; execute passes back what the quote returned.

const SWAP_URL = "https://trade-api.gateway.uniswap.org/v1/swap";

export function buildSwapBody(rawQuote: Record<string, unknown>): Record<string, unknown> {
  const body: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(rawQuote)) {
    if (value === null || value === undefined) continue;
    body[key] = value;
  }
  // The proxy approval flow never sends a signature (Uniswap plugin doc).
  delete body.signature;
  return body;
}

export interface SwapCall {
  to: string;
  data: string;
  value: string;
  chainId: number;
}

export async function fetchSwap(apiKey: string, body: Record<string, unknown>): Promise<SwapCall> {
  const res = await fetch(SWAP_URL, {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": apiKey, "x-permit2-disabled": "true" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`swap request failed: HTTP ${res.status}`);
  const out = (await res.json()) as {
    swap?: { to?: unknown; data?: unknown; value?: unknown; chainId?: unknown };
  };
  const swap = out.swap;
  if (
    typeof swap?.to !== "string" ||
    typeof swap?.data !== "string" ||
    typeof swap?.value !== "string" ||
    typeof swap?.chainId !== "number"
  ) {
    throw new Error("swap response held no executable calldata");
  }
  return { to: swap.to, data: swap.data, value: swap.value, chainId: swap.chainId };
}
