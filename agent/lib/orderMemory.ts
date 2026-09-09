// HOT in-flight order marks and COLD fill records against the Sibyl sidecar.
// Best effort: every helper returns a boolean and never throws.

const SIDECAR_TIMEOUT_MS = 8000;

function sidecarBase(): string {
  return process.env.SIBYL_SIDECAR_URL ?? "http://localhost:8000";
}

async function post(path: string, payload: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch(`${sidecarBase()}${path}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(SIDECAR_TIMEOUT_MS),
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { ok?: boolean };
    return data.ok === true;
  } catch {
    return false;
  }
}

// Mark the order HOT as order_in_flight. Execute treats false as fatal.
export async function markInFlight(tenantId: string, body: Record<string, unknown>): Promise<boolean> {
  return post("/remember", {
    tenant_id: tenantId,
    category: "state",
    name: "order_in_flight",
    body,
  });
}

// Clear the HOT in-flight mark on every terminal state. Remember has no
// delete, so an empty body replaces the order content.
export async function clearInFlight(tenantId: string): Promise<boolean> {
  return post("/remember", {
    tenant_id: tenantId,
    category: "state",
    name: "order_in_flight",
    body: {},
  });
}

// Append the fill to the COLD journal.
export async function recordFill(tenantId: string, body: Record<string, unknown>): Promise<boolean> {
  return post("/record", { tenant_id: tenantId, kind: "fill", body });
}

export async function rememberPosition(
  tenantId: string,
  token: string,
  update: { shares?: string; avgCostUsdc?: string; watchlisted?: boolean; thesis?: string },
): Promise<boolean> {
  try {
    const base = process.env.SIBYL_SIDECAR_URL ?? "http://localhost:8000";
    const existing = await fetch(`${base}/recall`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ tenant_id: tenantId, category: "positions", name: token }),
      signal: AbortSignal.timeout(SIDECAR_TIMEOUT_MS),
    })
      .then((r) => r.json())
      .catch(() => null) as { ok?: boolean; entity?: { body?: Record<string, unknown> } } | null;
    const cur = (existing?.ok === true ? existing?.entity?.body : null) ?? {};
    const body: Record<string, unknown> = {
      shares: update.shares ?? (cur.shares as string | undefined) ?? "0",
      avg_cost_usdc: update.avgCostUsdc ?? (cur.avg_cost_usdc as string | undefined) ?? "0",
      watchlisted: update.watchlisted ?? (cur.watchlisted as boolean | undefined) ?? false,
      thesis: update.thesis ?? (cur.thesis as string | undefined) ?? "",
    };
    return post("/remember", { tenant_id: tenantId, category: "positions", name: token, body });
  } catch {
    return false;
  }
}
