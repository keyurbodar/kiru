import { defineMcpClientConnection } from "eve/connections";

// No static credentials here. The user authorizes in Base Account via OAuth at connect time.
export default defineMcpClientConnection({
  url: "https://mcp.base.org",
  description:
    "Base Account on Base chain 8453: wallets, balances, transfers, message signing, x402 payments, and transaction history. Writes return an approvalUrl and need user approval in Base Account before they take effect. The user keeps custody; the agent never holds keys.",
});
