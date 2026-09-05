import React from "react";
import type { QuoteBuyOutput } from "../../../agent/lib/contracts.js";

export interface QuoteCardProps {
  quote: QuoteBuyOutput;
  approvalUrl: string;
}

export interface FilledCardProps {
  token: string;
  shares: string;
  avgPriceUsdc: string;
  positionUsdc: string;
}

export function QuoteCard({ quote, approvalUrl }: QuoteCardProps) {
  return (
    <main>
      <h1>
        {quote.token} quote (30s)
      </h1>
      <dl>
        <div>
          <dt>Price</dt>
          <dd>{quote.priceUsdc}</dd>
        </div>
        <div>
          <dt>You pay</dt>
          <dd>{quote.payUsdc} USDC</dd>
        </div>
        <div>
          <dt>You get</dt>
          <dd>
            {quote.getTokens} {quote.token}
          </dd>
        </div>
        <div>
          <dt>Fee</dt>
          <dd>{quote.feeUsdc}</dd>
        </div>
      </dl>
      <a href={approvalUrl}>Approve</a>
      <p>Expires {quote.expiresAt}</p>
    </main>
  );
}

export function FilledCard({ token, shares, avgPriceUsdc, positionUsdc }: FilledCardProps) {
  return (
    <main>
      <h1>{token} filled</h1>
      <dl>
        <div>
          <dt>Shares</dt>
          <dd>{shares}</dd>
        </div>
        <div>
          <dt>Avg price</dt>
          <dd>{avgPriceUsdc}</dd>
        </div>
        <div>
          <dt>Position</dt>
          <dd>{positionUsdc} USDC</dd>
        </div>
      </dl>
    </main>
  );
}

export default function CardPage(
  props:
    | { state: "quote"; quote: QuoteBuyOutput; approvalUrl: string }
    | { state: "filled"; filled: FilledCardProps },
) {
  if (props.state === "filled") return <FilledCard {...props.filled} />;
  return <QuoteCard quote={props.quote} approvalUrl={props.approvalUrl} />;
}
