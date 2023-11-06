"use client";
import {
  EvmChain,
  GetTokenMetadataRequest,
} from "@moralisweb3/common-evm-utils";
import { useEvmTokenMetadata } from "@moralisweb3/next";
import Link from "next/link";
import React from "react";
import { markets } from "../../utils/markets";

function MarketsList() {
  const r: GetTokenMetadataRequest = {
    addresses: markets.map((m) => m.contractAddress),
    chain: EvmChain.GOERLI,
  };

  console.log("static addresses: ", r);
  const metadata = useEvmTokenMetadata(r);
  return (
    <div>
      MarketsList

      <div>
        <ul>
          {markets.map((m, i) => {
            return (
              <li className="market-mention" key={`market-${i}`}>
                <Link href={`/markets/${m.contractAddress}`}>{m.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <div>
        {metadata && metadata.data && metadata.data.map((value) => {
          return (
            <p>
              {value.token.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default MarketsList;
