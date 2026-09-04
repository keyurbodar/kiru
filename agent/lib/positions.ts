import { getPositionOutput, type GetPositionOutput } from "./contracts.js";

export const chainId = 8453;

export const venueTokens: Record<string, `0x${string}`> = {
  NVDAc: "0xb20000000000000000000078ee7ce2fE4908108C",
};

const scaledBalanceOf = "0x1da24f3e";
const balanceOf = "0x70a08231";
const decimalsFn = "0x313ce567";

export function resolveVenueToken(symbol: string): { symbol: string; address: `0x${string}` } | null {
  const exact = venueTokens[symbol];
  if (exact !== undefined) return { symbol, address: exact };
  const hit = Object.entries(venueTokens).find(([name]) => name.toLowerCase() === symbol.toLowerCase());
  if (hit === undefined) return null;
  return { symbol: hit[0], address: hit[1] };
}

async function ethCall(rpcUrl: string, to: string, data: string): Promise<bigint | null> {
  const res = await fetch(rpcUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "eth_call", params: [{ to, data }, "latest"] }),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) return null;
  const body = (await res.json()) as { result?: unknown };
  if (typeof body.result !== "string" || body.result === "0x") return null;
  try {
    return BigInt(body.result);
  } catch {
    return null;
  }
}

async function readDecimals(rpcUrl: string, token: string): Promise<number> {
  const raw = await ethCall(rpcUrl, token, decimalsFn);
  if (raw === null || raw > 36n) return 18;
  return Number(raw);
}

export interface PositionRead {
  raw: bigint;
  decimals: number;
  scaled: boolean;
}

export async function readPosition(
  rpcUrl: string,
  token: `0x${string}`,
  owner: `0x${string}`,
): Promise<PositionRead> {
  if (!/^0x[0-9a-fA-F]{40}$/.test(owner)) throw new Error(`invalid owner address ${owner}`);
  const data = owner.toLowerCase().replace(/^0x/, "").padStart(64, "0");
  const scaled = await ethCall(rpcUrl, token, scaledBalanceOf + data);
  if (scaled !== null) return { raw: scaled, decimals: await readDecimals(rpcUrl, token), scaled: true };
  const base = await ethCall(rpcUrl, token, balanceOf + data);
  if (base === null) throw new Error(`position read failed for ${token}`);
  return { raw: base, decimals: await readDecimals(rpcUrl, token), scaled: false };
}

export function formatShares(raw: bigint, decimals: number): string {
  const base = 10n ** BigInt(decimals);
  const whole = raw / base;
  if (decimals === 0) return whole.toString();
  const frac = (raw % base).toString().padStart(decimals, "0").slice(0, 8).replace(/0+$/, "");
  return frac.length === 0 ? whole.toString() : `${whole.toString()}.${frac}`;
}

export interface BasisRead {
  avgCostUsdc: string;
  updatedAt: string | null;
}

export async function recallBasis(
  sidecarUrl: string,
  tenantId: string,
  token: string,
): Promise<BasisRead | null> {
  try {
    const res = await fetch(`${sidecarUrl}/recall`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tenant_id: tenantId, category: "positions", name: token }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    const body = (await res.json()) as {
      ok?: boolean;
      entity?: { body?: { avg_cost_usdc?: unknown }; updated_at?: unknown };
    };
    const avg = body.entity?.body?.avg_cost_usdc;
    if (body.ok !== true || typeof avg !== "string") return null;
    const updatedAt = body.entity?.updated_at;
    return { avgCostUsdc: avg, updatedAt: typeof updatedAt === "string" ? updatedAt : null };
  } catch {
    return null;
  }
}

export async function getPositionFor(args: {
  rpcUrl: string;
  sidecarUrl?: string;
  tenantId: string;
  symbol: string;
  owner: string;
}): Promise<GetPositionOutput> {
  const venue = resolveVenueToken(args.symbol);
  if (venue === null) throw new Error(`No venue listing for ${args.symbol}: outside venue, no read attempted.`);
  if (!/^0x[0-9a-fA-F]{40}$/.test(args.owner)) {
    throw new Error("No Base Account address on file for this tenant, refusing to guess a balance.");
  }
  const read = await readPosition(args.rpcUrl, venue.address, args.owner as `0x${string}`);
  let avgCostUsdc = "0";
  let updatedAt: string | null = null;
  if (args.sidecarUrl !== undefined && args.sidecarUrl !== "") {
    const basis = await recallBasis(args.sidecarUrl, args.tenantId, venue.symbol);
    if (basis !== null) {
      avgCostUsdc = basis.avgCostUsdc;
      updatedAt = basis.updatedAt;
    }
  }
  return getPositionOutput.parse({
    token: venue.symbol,
    shares: formatShares(read.raw, read.decimals),
    avgCostUsdc,
    updatedAt,
  });
}
