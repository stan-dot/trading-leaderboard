import { Erc20Token } from "@moralisweb3/common-evm-utils";
import React from "react";

const TokenMetadataDisplay: React.FC<{ token: Erc20Token; address: string }> = (
  { token, address },
) => (
  <div className="token-metadata-container">
    <div className="token-metadata-header">
      <img
        src={token.logo}
        alt={`${token.name} logo`}
        className="token-logo"
      />
      <h2>{token.name} ({token.symbol})</h2>
    </div>
    <div className="token-metadata-body">
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Decimals:</strong> {token.decimals}
      </p>
      <p>
        <strong>At chain:</strong> {token.chain.name}
      </p>
      <p className={data.possible_spam ? "warning" : ""}>
        {token.possibleSpam ? "Possible Spam" : "Not Marked as Spam"}
      </p>
    </div>
  </div>
);

export default TokenMetadataDisplay;
