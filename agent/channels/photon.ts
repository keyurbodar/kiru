import { defaultPhotonAuth, photonIMessageChannel } from "eve/channels/photon";
import { tenantId } from "../lib/contracts.js";

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

export function dispatchInbound(sender: unknown, text: unknown, isBot: boolean) {
  if (isBot) return null;
  const tenant = tenantId.safeParse(sender);
  if (!tenant.success) return null;
  if (typeof text !== "string" || text.length === 0) return null;
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
