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
