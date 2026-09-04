import { defineTool } from "eve/tools";
import { getPositionInput } from "../lib/contracts.js";
import { getPositionFor } from "../lib/positions.js";

export default defineTool({
  description:
    "Onchain share balance for a venue token on Base 8453 with the remembered average cost. Unknown symbols refuse without reading.",
  inputSchema: getPositionInput,
  async execute(input) {
    const rpcUrl = process.env.BASE_RPC_URL;
    if (rpcUrl === undefined || rpcUrl === "") {
      throw new Error("BASE_RPC_URL is not set, refusing to guess a balance.");
    }
    const owner = process.env.BASE_ACCOUNT_ADDRESS;
    if (owner === undefined || owner === "") {
      throw new Error("BASE_ACCOUNT_ADDRESS is not set, refusing to guess a balance.");
    }
    const sidecar = process.env.SIBYL_URL;
    return getPositionFor({
      rpcUrl,
      sidecarUrl: sidecar === "" ? undefined : sidecar,
      tenantId: input.tenantId,
      symbol: input.token,
      owner,
    });
  },
});
