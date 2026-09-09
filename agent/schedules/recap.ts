import { defineSchedule } from "eve/schedules";
import telegram from "../channels/telegram.js";

function sidecarBase(): string {
  return process.env.SIBYL_SIDECAR_URL ?? "http://localhost:8000";
}

async function recallPositions(tenantId: string): Promise<Array<{ token: string; shares: string; avg: string }>> {
  const tokens = ["NVDAc", "TSLA", "GOOGL"];
  const out: Array<{ token: string; shares: string; avg: string }> = [];
  for (const token of tokens) {
    try {
      const res = await fetch(`${sidecarBase()}/recall`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tenant_id: tenantId, category: "positions", name: token }),
        signal: AbortSignal.timeout(5000),
      });
      const body = (await res.json()) as { ok?: boolean; entity?: { body?: { shares?: string; avg_cost_usdc?: string } } };
      if (body.ok === true && body.entity?.body?.shares) {
        out.push({ token, shares: body.entity.body.shares as string, avg: (body.entity.body.avg_cost_usdc as string) ?? "0" });
      }
    } catch {
      continue;
    }
  }
  return out;
}

async function searchFills(tenantId: string): Promise<Array<{ token: string; pay: string; at: string }>> {
  try {
    const res = await fetch(`${sidecarBase()}/search`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tenant_id: tenantId, query: "fill", tiers: "journal", limit: 10 }),
      signal: AbortSignal.timeout(5000),
    });
    const data = (await res.json()) as { ok?: boolean; results?: Array<{ body?: { token?: string; pay_usdc?: string; filledAt?: string } }> };
    if (data.ok !== true || !data.results) return [];
    return data.results
      .map((r) => ({ token: (r.body?.token as string) ?? "?", pay: (r.body?.pay_usdc as string) ?? "0", at: (r.body?.filledAt as string) ?? "" }))
      .slice(0, 5);
  } catch {
    return [];
  }
}

export function composeRecap(positions: Array<{ token: string; shares: string; avg: string }>, fills: Array<{ token: string; pay: string }>): string | null {
  if (positions.length === 0 && fills.length === 0) return null;
  const holdings = positions.length > 0 ? positions.map((p) => `${p.shares} ${p.token} @ $${p.avg} avg`).join(", ") : "no holdings";
  const fillsStr = fills.length > 0 ? fills.map((f) => `${f.token} for $${f.pay} USDC`).join(", ") : "no fills this week";
  return `Weekly recap: holdings ${holdings}. Fills: ${fillsStr}. Reply portfolio for the card.`;
}

export default defineSchedule({
  cron: "0 9 * * 1",
  async run({ to }) {
    const tenant = process.env.RECAP_TENANT ?? process.env.TELEGRAM_CHAT_ID ?? "";
    if (!tenant) return;
    const positions = await recallPositions(tenant);
    const fills = await searchFills(tenant);
    const text = composeRecap(positions, fills);
    if (text === null) return;
    await (to as unknown as (c: typeof telegram, t: { chatId: string }) => { send: (m: string) => Promise<unknown> })(telegram, { chatId: tenant }).send(text);
  },
});
