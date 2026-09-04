// Uniswap trade API swap calldata on Base chain 8453. POST /v1/swap reuses
// the flat /quote response object minus null or undefined entries. The route
// is never re-derived here; execute passes back what the quote returned.

const SWAP_URL = "https://trade-api.gateway.uniswap.org/v1/swap";

// Base MCP parses values with Go hexutil.Big, which rejects leading zero
// digits, so 0x00 from the venue must fold to 0x0 before submit.
function normHex(value: string): string {
  const body = /^0x([0-9a-fA-F]*)$/.exec(value);
  if (body === null) return value;
  const slim = body[1].replace(/^0+/, "");
  return `0x${slim === "" ? "0" : slim}`;
}
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
  return { to: swap.to, data: swap.data, value: normHex(swap.value), chainId: swap.chainId };
}

const CHECK_URL = "https://trade-api.gateway.uniswap.org/v1/check_approval";

export interface ApprovalCall {
  to: string;
  data: string;
  value: string;
  chainId: number;
}

export async function checkApproval(
  apiKey: string,
  args: { walletAddress: string; token: string; amount: string },
): Promise<ApprovalCall | null> {
  const res = await fetch(CHECK_URL, {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": apiKey, "x-permit2-disabled": "true" },
    body: JSON.stringify({ ...args, chainId: 8453, includeGasInfo: true }),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`check_approval failed: HTTP ${res.status}`);
  const out = (await res.json()) as {
    approval?: { to?: unknown; data?: unknown; value?: unknown; chainId?: unknown } | null;
  };
  const approval = out.approval;
  if (approval === null || approval === undefined) return null;
  if (
    typeof approval.to !== "string" ||
    typeof approval.data !== "string" ||
    typeof approval.value !== "string" ||
    typeof approval.chainId !== "number"
  ) {
    throw new Error("check_approval returned a malformed approval");
  }
  return { to: approval.to, data: approval.data, value: normHex(approval.value), chainId: approval.chainId };
}
