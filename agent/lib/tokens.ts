export interface TokenRef {
  symbol: string;
  address: `0x${string}`;
  decimals: number | null;
}

const seeds: Array<{ symbol: string; address: `0x${string}`; decimals: number }> = [
  { symbol: "AAPLc", address: "0xb200000000000000000000C2e324d24d7eEcd1fb", decimals: 8 },
  { symbol: "AMZNc", address: "0xb200000000000000000000d9192b6B456483C2E8", decimals: 8 },
  { symbol: "COINc", address: "0xb200000000000000000000c85a31389D71F3ecfb", decimals: 8 },
  { symbol: "CRCLc", address: "0xB20000000000000000000019f6E7C675b73C2e4D", decimals: 8 },
  { symbol: "GOOGLc", address: "0xb2000000000000000000002D0BA3164cc74f58B7", decimals: 8 },
  { symbol: "INTCc", address: "0xB2000000000000000000004AFF16039bA04bdFBc", decimals: 8 },
  { symbol: "METAc", address: "0xb2000000000000000000008bC8786B856E61707C", decimals: 8 },
  { symbol: "MSFTc", address: "0xB200000000000000000000Ab99cFa739E253872B", decimals: 8 },
  { symbol: "MSTRc", address: "0xb2000000000000000000004884b426556b92883d", decimals: 8 },
  { symbol: "NVDAc", address: "0xb20000000000000000000078ee7ce2fE4908108C", decimals: 8 },
  { symbol: "SNDKc", address: "0xb200000000000000000000397293Cb8cda9a10c5", decimals: 8 },
  { symbol: "SPCXc", address: "0xb2000000000000000000007b9fcbd005511aCBd5", decimals: 8 },
  { symbol: "TSLAc", address: "0xb2000000000000000000001e800a7f5189430cD0", decimals: 8 },
];

const cache = new Map<string, TokenRef>();

const registryAddress = "0x3f3E8cf41cdd3b1D118c16471aB0113DfDDd5CaD";
const b20CreatedTopic =
  "0xfd9bf2730513a1709722ff379a0844dfd8f997d600693c2bcc659e188bbdba0d";
const symbolSelector = "0x95d89b41";
const decimalsSelector = "0x313ce567";
const zeroAddress = "0x0000000000000000000000000000000000000000";

export function seedOf(symbol: string): TokenRef | null {
  const key = symbol.trim().toUpperCase();
  const seed = seeds.find((entry) => entry.symbol.toUpperCase() === key);
  if (seed === undefined) return null;
  return { symbol: seed.symbol, address: seed.address, decimals: seed.decimals };
}

export async function resolveToken(
  symbol: string,
  rpcUrl?: string,
): Promise<TokenRef | null> {
  const seed = seedOf(symbol);
  if (seed !== null) return seed;
  if (rpcUrl === undefined || rpcUrl === "") return null;
  const key = symbol.trim().toUpperCase();
  if (key === "") return null;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;
  try {
    const candidates = await discoverTokens(rpcUrl);
    for (const address of candidates) {
      const verified = await verifyToken(address, rpcUrl);
      if (verified !== null && verified.symbol.toUpperCase() === key) {
        const ref: TokenRef = {
          symbol: verified.symbol,
          address,
          decimals: verified.decimals,
        };
        cache.set(key, ref);
        return ref;
      }
    }
  } catch {
    return null;
  }
  return null;
}

export async function verifyToken(
  address: `0x${string}`,
  rpcUrl: string,
): Promise<{ symbol: string; decimals: number } | null> {
  try {
    const [rawSymbol, rawDecimals] = await Promise.all([
      rpcCall(rpcUrl, "eth_call", [{ to: address, data: symbolSelector }, "latest"]),
      rpcCall(rpcUrl, "eth_call", [{ to: address, data: decimalsSelector }, "latest"]),
    ]);
    if (typeof rawSymbol !== "string" || typeof rawDecimals !== "string") return null;
    const symbol = decodeSymbol(rawSymbol);
    const decimals = decodeUint(rawDecimals);
    if (symbol === null || symbol === "" || decimals === null) return null;
    return { symbol, decimals };
  } catch {
    return null;
  }
}

async function rpcCall(
  rpcUrl: string,
  method: string,
  params: unknown[],
): Promise<unknown> {
  const res = await fetch(rpcUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) return null;
  const body = (await res.json()) as { result?: unknown; error?: unknown };
  if (body.error !== undefined && body.error !== null) return null;
  return body.result ?? null;
}

async function queryLogs(
  rpcUrl: string,
  fromBlock: string,
  toBlock: string,
): Promise<unknown[] | null> {
  const logs = await rpcCall(rpcUrl, "eth_getLogs", [
    {
      address: [registryAddress],
      topics: [b20CreatedTopic],
      fromBlock,
      toBlock,
    },
  ]);
  return Array.isArray(logs) ? logs : null;
}

async function discoverTokens(rpcUrl: string): Promise<`0x${string}`[]> {
  let logs = await queryLogs(rpcUrl, "0x0", "latest");
  if (logs === null) {
    const head = await rpcCall(rpcUrl, "eth_blockNumber", []);
    if (typeof head !== "string") return [];
    const end = BigInt(head);
    const start = end > 9n ? end - 9n : 0n;
    logs = await queryLogs(rpcUrl, `0x${start.toString(16)}`, `0x${end.toString(16)}`);
    if (logs === null) return [];
  }
  const found: `0x${string}`[] = [];
  const seen = new Set<string>();
  const push = (address: `0x${string}` | null) => {
    if (address === null) return;
    const key = address.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    found.push(address);
  };
  for (const log of logs) {
    if (typeof log !== "object" || log === null) continue;
    const topics = (log as { topics?: unknown }).topics;
    if (Array.isArray(topics)) {
      for (const topic of topics.slice(1)) {
        if (typeof topic === "string") push(wordToAddress(topic));
      }
    }
    const data = (log as { data?: unknown }).data;
    if (typeof data === "string" && data.startsWith("0x")) {
      const hex = data.slice(2);
      for (let i = 0; i + 64 <= hex.length; i += 64) {
        push(wordToAddress(`0x${hex.slice(i, i + 64)}`));
      }
    }
  }
  const b20 = found.filter((a) => a.toLowerCase().startsWith("0xb2"));
  const rest = found.filter((a) => !a.toLowerCase().startsWith("0xb2"));
  return [...b20, ...rest].slice(0, 40);
}

function wordToAddress(word: string): `0x${string}` | null {
  const hex = word.startsWith("0x") ? word.slice(2) : word;
  if (hex.length < 40 || !/^[0-9a-fA-F]+$/.test(hex)) return null;
  const address = `0x${hex.slice(-40)}` as `0x${string}`;
  if (address.toLowerCase() === zeroAddress) return null;
  return address;
}

function decodeSymbol(data: string): string | null {
  if (!data.startsWith("0x")) return null;
  const hex = data.slice(2);
  if (!/^[0-9a-fA-F]*$/.test(hex)) return null;
  if (hex.length === 64) return decodeAscii(hex);
  if (hex.length < 128) return null;
  const length = Number.parseInt(hex.slice(64, 128), 16);
  if (!Number.isInteger(length) || length <= 0 || length > 32) return null;
  const body = hex.slice(128, 128 + length * 2);
  if (body.length !== length * 2) return null;
  return decodeAscii(body);
}

function decodeAscii(hex: string): string | null {
  if (hex.length === 0 || hex.length % 2 !== 0) return null;
  let text = "";
  for (let i = 0; i < hex.length; i += 2) {
    const code = Number.parseInt(hex.slice(i, i + 2), 16);
    if (code < 32 || code > 126) {
      if (!(code === 0 && text.length > 0)) return null;
      break;
    }
    text += String.fromCharCode(code);
  }
  const trimmed = text.replace(/\0+$/, "");
  return trimmed.length > 0 && trimmed.length <= 32 ? trimmed : null;
}

function decodeUint(data: string): number | null {
  if (!data.startsWith("0x")) return null;
  const hex = data.slice(2);
  if (!/^[0-9a-fA-F]+$/.test(hex) || hex.length > 64) return null;
  try {
    const value = Number(BigInt(`0x${hex}`));
    if (!Number.isSafeInteger(value) || value < 0 || value > 255) return null;
    return value;
  } catch {
    return null;
  }
}
