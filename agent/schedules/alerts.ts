import { defineSchedule } from "eve/schedules";
import telegram from "../channels/telegram.js";
import { quoteUsdcToToken } from "../lib/routingQuote.js";
import { resolveToken } from "../lib/tokens.js";

function sidecarBase(): string {
  return process.env.SIBYL_SIDECAR_URL ?? "http://localhost:8000";
}

interface AlertPref {
  token: string;
  threshold: string;
  direction: "over" | "under";
  tenantId: string;
}

async function recallAlerts(tenantId: string): Promise<AlertPref[]> {
  try {
    const res = await fetch(`${sidecarBase()}/search`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tenant_id: tenantId, query: "alert", tiers: "entity", limit: 10 }),
      signal: AbortSignal.timeout(5000),
    });
    const data = (await res.json()) as { ok?: boolean; results?: Array<{ category?: string; name?: string; body?: { token?: string; threshold?: string; direction?: string } }> };
    if (data.ok !== true || !data.results) return [];
    return data.results
      .filter((r) => r.category === "alerts")
      .map((r) => ({
        token: (r.body?.token as string) ?? (r.name as string) ?? "",
        threshold: (r.body?.threshold as string) ?? "",
        direction: ((r.body?.direction as string) === "under" ? "under" : "over") as "over" | "under",
        tenantId,
      }))
      .filter((a) => a.token && a.threshold);
  } catch {
    return [];
  }
}

export function shouldAlert(price: string, pref: AlertPref): boolean {
  const p = Number(price);
  const t = Number(pref.threshold);
  if (!Number.isFinite(p) || !Number.isFinite(t)) return false;
  return pref.direction === "over" ? p > t : p < t;
}

export async function checkAlerts(tenantId: string): Promise<string[]> {
  const prefs = await recallAlerts(tenantId);
  const msgs: string[] = [];
  for (const pref of prefs) {
    const tok = await resolveToken(pref.token);
    if (!tok) continue;
    const q = await quoteUsdcToToken("1", { symbol: tok.symbol, address: tok.address, decimals: tok.decimals ?? 18 });
    if (!q.ok) continue;
    if (shouldAlert(q.priceUsdc, pref)) {
      msgs.push(`${pref.token} is ${pref.direction} $${pref.threshold} (last $${q.priceUsdc}). Send buy $50 of ${pref.token} for a live quote.`);
    }
  }
  return msgs;
}

export default defineSchedule({
  cron: "*/5 * * * *",
  async run({ to }) {
    const tenant = process.env.ALERT_TENANT ?? process.env.TELEGRAM_CHAT_ID ?? "";
    if (!tenant) return;
    const msgs = await checkAlerts(tenant);
    for (const m of msgs) {
      await (to as unknown as (c: typeof telegram, t: { chatId: string }) => { send: (x: string) => Promise<unknown> })(telegram, { chatId: tenant }).send(m);
    }
  },
});
