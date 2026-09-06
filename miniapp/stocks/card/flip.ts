import type { FilledCardProps } from "./page.js";

export interface SettledFill {
  status: string;
  token: string;
  getTokens: string;
  payUsdc: string;
  avgPriceUsdc: string;
}

export function flipProps(fill: SettledFill): FilledCardProps | null {
  if (fill.status !== "confirmed") return null;
  if (!fill.token || !fill.getTokens || !fill.payUsdc || !fill.avgPriceUsdc) return null;
  return {
    token: fill.token,
    shares: fill.getTokens,
    avgPriceUsdc: fill.avgPriceUsdc,
    positionUsdc: fill.payUsdc,
  };
}
