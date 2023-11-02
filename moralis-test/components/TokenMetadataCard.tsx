import React from "react";
import "card.css";
import { MoralisTokenMetadataResponse } from "../types/MoralisTokenMetadataResponse";

// Define the component
const TokenMetadataDisplay: React.FC<{ data: MoralisTokenMetadataResponse }> = (
  { data },
) => {
  return (
    <div className="token-metadata-container">
      <div className="token-metadata-header">
        <img src={data.logo} alt={`${data.name} logo`} className="token-logo" />
        <h2>{data.name} ({data.symbol})</h2>
      </div>
      <div className="token-metadata-body">
        <p>
          <strong>Address:</strong> {data.address}
        </p>
        <p>
          <strong>Decimals:</strong> {data.decimals}
        </p>
        <p>
          <strong>Created At:</strong> {data.created_at}
        </p>
        <p className={data.possible_spam ? "warning" : ""}>
          {data.possible_spam ? "Possible Spam" : "Not Marked as Spam"}
        </p>
      </div>
    </div>
  );
};

export default TokenMetadataDisplay;
