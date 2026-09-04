import { z } from "zod";

export const chainId = 8453 as const;

export const tenantId = z.string().regex(/^\+[1-9]\d{7,14}$/);
export const tokenSymbol = z.string().min(1).max(16);
export const usdcAmount = z.string().regex(/^\d+(\.\d{1,6})?$/);
export const tokenAmount = z.string().regex(/^\d+(\.\d{1,8})?$/);
export const quoteId = z.string().min(1).max(64);
export const approvalUrl = z.string().url();
export const requestId = z.string().min(1).max(128);

export const quoteBuyInput = z.object({
  tenantId,
  token: tokenSymbol,
  usdcAmount,
});

export const quoteBuyOutput = z.object({
  quoteId,
  token: tokenSymbol,
  priceUsdc: usdcAmount,
  payUsdc: usdcAmount,
  getTokens: tokenAmount,
  feeUsdc: usdcAmount,
  expiresAt: z.string().datetime(),
  paper: z.literal(true),
});

export const getPositionInput = z.object({
  tenantId,
  token: tokenSymbol,
});

export const getPositionOutput = z.object({
  token: tokenSymbol,
  shares: tokenAmount,
  avgCostUsdc: usdcAmount,
  updatedAt: z.string().datetime().nullable(),
});

export const executeBuyInput = z.object({
  tenantId,
  quoteId,
});

export const executeBuyOutput = z.object({
  quoteId,
  approvalUrl,
  requestId,
});

export const quoteBuy = {
  input: quoteBuyInput,
  output: quoteBuyOutput,
} as const;

export const getPosition = {
  input: getPositionInput,
  output: getPositionOutput,
} as const;

export const executeBuy = {
  input: executeBuyInput,
  output: executeBuyOutput,
} as const;

export type QuoteBuyInput = z.infer<typeof quoteBuyInput>;
export type QuoteBuyOutput = z.infer<typeof quoteBuyOutput>;
export type GetPositionInput = z.infer<typeof getPositionInput>;
export type GetPositionOutput = z.infer<typeof getPositionOutput>;
export type ExecuteBuyInput = z.infer<typeof executeBuyInput>;
export type ExecuteBuyOutput = z.infer<typeof executeBuyOutput>;
