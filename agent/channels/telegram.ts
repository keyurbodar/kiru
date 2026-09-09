import { randomUUID } from "node:crypto";
import { defaultTelegramAuth, telegramChannel, type TelegramUser } from "eve/channels/telegram";
import { approvalUrl, quoteBuyOutput, type QuoteBuyOutput } from "../lib/contracts.js";

function readCredentials() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) {
    throw new Error("Telegram bot credentials are required.");
  }
  return { botToken };
}

export function hasTelegramCredentials(): boolean {
  return Boolean(process.env.TELEGRAM_BOT_TOKEN);
}

// Telegram senders are numeric ids, not E.164 phones, so the contracts
// tenant shape cannot validate them here. The id passes through as an
// opaque tenant for non-money dispatch only. Every money tool input
// still enforces E.164, so Telegram tenants fail closed at execution
// until a cross-layer identity scheme is ruled.
export function resolveTenant(from?: TelegramUser | null): string | null {
  if (from === undefined || from === null || from.isBot || from.id === "") return null;
  return from.id;
}

export function buildEchoContext(sender: string, text: string): string {
  return `Inbound Telegram message from tenant ${sender}: "${text}". Echo it back briefly, then offer help with tokenized stocks on Base.`;
}

export function buildApprovalCard(quote: QuoteBuyOutput, url: string): string | null {
  if (!quoteBuyOutput.safeParse(quote).success) return null;
  if (!approvalUrl.safeParse(url).success) return null;
  return [
    `${quote.token} quote (30s): pay ${quote.payUsdc} USDC for ~${quote.getTokens} ${quote.token} @ ${quote.priceUsdc}, fee ${quote.feeUsdc}.`,
    `Approve: ${url}`,
    `Reply Approve or Decline. Expires ${quote.expiresAt}.`,
  ].join("\n");
}

export function routeApprovalReply(text: string): "approve" | "decline" | null {
  const word = text.trim().toLowerCase().replace(/[.?!]+$/, "");
  if (["approve", "approved", "yes", "yep", "confirm", "confirmed"].includes(word)) return "approve";
  if (["decline", "declined", "no", "nope", "cancel", "cancelled", "stop"].includes(word)) return "decline";
  return null;
}

export function routeCallbackQuery(data: string | undefined): { kind: "approve" | "decline"; quoteId: string } | null {
  if (data === undefined) return null;
  const [kind, quoteId] = data.split(":");
  if (quoteId === undefined || quoteId === "") return null;
  if (kind !== "approve" && kind !== "decline") return null;
  return { kind, quoteId };
}

export function reactionFor(kind: "order" | "fill"): "👍" | "❤️" {
  return kind === "fill" ? "❤️" : "👍";
}

export function formatFillReceipt(token: string, shares: string, payUsdc: string): string {
  return `Filled: *${shares} ${token}* for *$${payUsdc} USDC*. Held in your Base Account.`;
}

export function formatDeclineReceipt(token: string): string {
  return `Cancelled your pending ${token} quote. Nothing moved. Text a new order anytime.`;
}

export function formatErrorReceipt(token: string): string {
  return `No quote for ${token} right now, illiquid on venue. Try again later.`;
}

export interface ChannelSpan {
  traceId: string;
  name: "receive" | "tool-call" | "reply-send";
  tenant: string;
  thread: string;
}

export function traceMessage(tenant: string, thread: string, traceId: string = randomUUID()): ChannelSpan[] {
  return (["receive", "tool-call", "reply-send"] as const).map((name) => ({ traceId, name, tenant, thread }));
}

export function dispatchInbound(from: TelegramUser | null | undefined, text: unknown) {
  const tenant = resolveTenant(from);
  if (tenant === null) return null;
  if (typeof text !== "string" || text.length === 0) return null;
  const approval = routeApprovalReply(text);
  if (approval === "approve") {
    return {
      context: [
        `Tenant ${tenant} approved the pending quote. Continue into executeBuy with this tenant and the staged pending quoteId. Quote mismatch fails closed.`,
      ],
      title: `Approval from ${tenant}`,
    };
  }
  if (approval === "decline") {
    return {
      context: [
        `Tenant ${tenant} declined the pending quote. Acknowledge the cancel and do not call executeBuy. The staged quote expires on its own.`,
      ],
      title: `Decline from ${tenant}`,
    };
  }
  return {
    context: [buildEchoContext(tenant, text)],
    title: `Telegram message from ${tenant}`,
  };
}

export default telegramChannel({
  credentials: hasTelegramCredentials() ? readCredentials() : undefined,
  onMessage(_ctx, message) {
    const decision = dispatchInbound(message.from, message.text);
    if (!decision) return null;
    return { auth: defaultTelegramAuth(message), ...decision };
  },
});
