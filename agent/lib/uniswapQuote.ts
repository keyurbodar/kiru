import { randomBytes } from "node:crypto";
import { quoteBuyOutput, type QuoteBuyOutput } from "./contracts.js";

// Uniswap V3 USDC -> NVDAc venue quote on Base (chain 8453).
// Reads pool slot0 + liquidity via eth_call, fee-500 first with fee-10000
// fallback, then dry-runs QuoterV2.quoteExactInputSingle for the requested
// USDC size. A dry pool returns no quote, never a guess.
// USDC on Base (token0 of both pools) and NVDAc, both 40-char addresses.
// USDC has 6 decimals, NVDAc 8.
export const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
export const NVDAC = "0xb20000000000000000000078ee7ce2fE4908108C";

const POOL_FEE_500 = "0xd3085c0c2605cef89f02a742acdfac95dca79bcd";
const POOL_FEE_10000 = "0x9778aad868418ff6c996294ce62c9ed2b96896d1";

// QuoterV2 on Base, confirmed onchain via Basescan:
// https://basescan.org/address/0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a
// and the official table:
// https://developers.uniswap.org/docs/protocols/v3/deployments/v3-base-deployments
export const QUOTER_V2 = "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a";

// quoteExactInputSingle((address,address,uint256,uint24,uint160)) with field
// order tokenIn, tokenOut, amountIn, fee, sqrtPriceLimitX96. Not 0xbd21704a
// (quoteExactOutputSingle, wrong direction) nor 0x1296323f (V1 flat args).
const QUOTE_SINGLE = "0xc6a5026a";

const TOKEN0 = "0x0dfe1681";
const TOKEN1 = "0xd21220a7";
const POOL_FEE = "0xddca3f43";
const SLOT0 = "0x3850c7bd";
const LIQUIDITY = "0x1a686502";
const DECIMALS = "0x313ce567";

const QUOTE_TTL_MS = 30_000;

export type QuoteResult =
  | ({ ok: true } & QuoteBuyOutput)
  | { ok: false; reason: "NO_RPC" | "RPC_ERROR" | "NO_QUOTE" };

class RpcError extends Error {}

let rpcId = 0;

async function ethCall(rpc: string, to: string, data: string): Promise<string> {
  const req = {
    jsonrpc: "2.0",
    id: ++rpcId,
    method: "eth_call",
    params: [{ to, data }, "latest"],
  };
  let res: Response;
  try {
    res = await fetch(rpc, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(req),
    });
  } catch {
    throw new RpcError("rpc unreachable");
  }
  if (!res.ok) throw new RpcError(`rpc http ${res.status}`);
  let body: { result?: unknown; error?: { message?: string } };
  try {
    body = (await res.json()) as typeof body;
  } catch {
    throw new RpcError("rpc bad json");
  }
  if (typeof body.result !== "string" || !/^0x[0-9a-fA-F]*$/.test(body.result)) {
    throw new RpcError(body.error?.message ?? "rpc call failed");
  }
  return body.result;
}

function wordUint(word: string): bigint {
  return BigInt(word);
}

function wordAddr(word: string): string {
  return `0x${word.slice(-40).toLowerCase()}`;
}

function addrWord(addr: string): string {
  return addr.toLowerCase().replace(/^0x/, "").padStart(64, "0");
}

function uintWord(value: bigint): string {
  return value.toString(16).padStart(64, "0");
}

function parseUsdc(s: string): bigint | null {
  const m = /^(\d+)(?:\.(\d{1,6}))?$/.exec(s);
  if (!m) return null;
  const units = BigInt(m[1]) * 1_000_000n + BigInt((m[2] ?? "").padEnd(6, "0"));
  return units === 0n ? null : units;
}

function formatUnits(value: bigint, decimals: number, maxDp: number): string {
  let v = value;
  let d = decimals;
  if (d > maxDp) {
    v = v / 10n ** BigInt(d - maxDp);
    d = maxDp;
  }
  const s = v.toString().padStart(d + 1, "0");
  const int = s.slice(0, s.length - d) || "0";
  const frac = (d === 0 ? "" : s.slice(s.length - d)).replace(/0+$/, "");
  return frac ? `${int}.${frac}` : int;
}

async function readDecimals(rpc: string, token: string): Promise<number | null> {
  try {
    const raw = await ethCall(rpc, token, DECIMALS);
    const d = wordUint(raw);
    if (d > 36n) return null;
    return Number(d);
  } catch (e) {
    if (e instanceof RpcError) return null;
    throw e;
  }
}

async function tryPool(
  rpc: string,
  pool: string,
  fee: number,
  amountIn: bigint,
  payUsdc: string,
  tokenDecimals: number,
): Promise<QuoteBuyOutput | null> {
  try {
    const [t0, t1, f, s0, liq] = await Promise.all([
      ethCall(rpc, pool, TOKEN0),
      ethCall(rpc, pool, TOKEN1),
      ethCall(rpc, pool, POOL_FEE),
      ethCall(rpc, pool, SLOT0),
      ethCall(rpc, pool, LIQUIDITY),
    ]);
    const pair = [wordAddr(t0), wordAddr(t1)];
    if (!pair.includes(USDC.toLowerCase())) return null;
    if (!pair.includes(NVDAC.toLowerCase())) return null;
    if (wordUint(f) !== BigInt(fee)) return null;
    if (wordUint(liq) === 0n || wordUint(s0) === 0n) return null;
    const data =
      QUOTE_SINGLE +
      addrWord(USDC) +
      addrWord(NVDAC) +
      uintWord(amountIn) +
      uintWord(BigInt(fee)) +
      uintWord(0n);
    const out = await ethCall(rpc, QUOTER_V2, data);
    if (out.length < 2 + 64) return null;
    const amountOut = BigInt(`0x${out.slice(2, 2 + 64)}`);
    if (amountOut === 0n) return null;
    const getTokens = formatUnits(amountOut, tokenDecimals, 8);
    if (getTokens === "0") return null;
    const priceUsdc = formatUnits(
      (amountIn * 10n ** BigInt(tokenDecimals)) / amountOut,
      6,
      6,
    );
    return quoteBuyOutput.parse({
      quoteId: `q_${Date.now().toString(36)}_${randomBytes(8).toString("hex")}`,
      token: "NVDAc",
      priceUsdc,
      payUsdc,
      getTokens,
      feeUsdc: "0",
      expiresAt: new Date(Date.now() + QUOTE_TTL_MS).toISOString(),
      paper: true,
    });
  } catch (e) {
    if (e instanceof RpcError) return null;
    throw e;
  }
}

export async function quoteUsdcToNvdac(usdcAmount: string): Promise<QuoteResult> {
  const rpc = process.env.BASE_RPC_URL;
  if (!rpc) return { ok: false, reason: "NO_RPC" };
  const amountIn = parseUsdc(usdcAmount);
  if (amountIn === null) return { ok: false, reason: "NO_QUOTE" };
  try {
    const tokenDecimals = await readDecimals(rpc, NVDAC);
    if (tokenDecimals === null) return { ok: false, reason: "NO_QUOTE" };
    const pools = [
      [POOL_FEE_500, 500],
      [POOL_FEE_10000, 10000],
    ] as const;
    for (const [pool, fee] of pools) {
      const quote = await tryPool(rpc, pool, fee, amountIn, usdcAmount, tokenDecimals);
      if (quote) return { ok: true, ...quote };
    }
    return { ok: false, reason: "NO_QUOTE" };
  } catch (e) {
    if (e instanceof RpcError) return { ok: false, reason: "RPC_ERROR" };
    throw e;
  }
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
