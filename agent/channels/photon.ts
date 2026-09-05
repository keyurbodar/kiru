import { defaultPhotonAuth, photonIMessageChannel } from "eve/channels/photon";
import { approvalUrl, quoteBuyOutput, tenantId, type QuoteBuyOutput } from "../lib/contracts.js";

function readCredentials() {
  const projectId = process.env.PHOTON_PROJECT_ID;
  const projectSecret = process.env.PHOTON_PROJECT_SECRET;
  if (!projectId || !projectSecret) {
    throw new Error("Photon project credentials are required.");
  }
  return { projectId, projectSecret };
}

export function hasPhotonCredentials(): boolean {
  return Boolean(process.env.PHOTON_PROJECT_ID && process.env.PHOTON_PROJECT_SECRET);
}

export function buildEchoContext(sender: string, text: string): string {
  return `Inbound iMessage from tenant ${sender}: "${text}". Echo it back briefly, then offer help with tokenized stocks on Base.`;
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

export function dispatchInbound(sender: unknown, text: unknown, isBot: boolean) {
  if (isBot) return null;
  const tenant = tenantId.safeParse(sender);
  if (!tenant.success) return null;
  if (typeof text !== "string" || text.length === 0) return null;
  const approval = routeApprovalReply(text);
  if (approval === "approve") {
    return {
      context: [
        `Tenant ${tenant.data} approved the pending quote. Continue into executeBuy with this tenant and the staged pending quoteId. Quote mismatch fails closed.`,
      ],
      title: `Approval from ${tenant.data}`,
    };
  }
  if (approval === "decline") {
    return {
      context: [
        `Tenant ${tenant.data} declined the pending quote. Acknowledge the cancel and do not call executeBuy. The staged quote expires on its own.`,
      ],
      title: `Decline from ${tenant.data}`,
    };
  }
  return {
    context: [buildEchoContext(tenant.data, text)],
    title: `iMessage from ${tenant.data}`,
  };
}

export default photonIMessageChannel({
  credentials: readCredentials,
  webhookSecret: process.env.IMESSAGE_WEBHOOK_SECRET,
  onMessage(_ctx, message) {
    const decision = dispatchInbound(message.author.userId, message.text, message.author.isBot);
    if (!decision) return null;
    return { auth: defaultPhotonAuth(message), ...decision };
  },
});
