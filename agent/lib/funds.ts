// Pre-flight funding check against Base RPC before any swap or send_calls.
import { readPosition } from "./positions.js";

export async function checkFunds(args: {
  rpcUrl: string;
  token: `0x${string}`;
  owner: string;
  needRaw: bigint;
}): Promise<"ok" | "short" | "error"> {
  try {
    const read = await readPosition(args.rpcUrl, args.token, args.owner as `0x${string}`);
    return read.raw < args.needRaw ? "short" : "ok";
  } catch {
    return "error";
  }
}
