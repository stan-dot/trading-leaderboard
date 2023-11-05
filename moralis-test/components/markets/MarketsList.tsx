"use client";
import { GetTokenMetadataRequest } from "@moralisweb3/common-evm-utils";
import { useEvmTokenMetadata } from "@moralisweb3/next";
import Link from "next/link";
import React from "react";
import { markets } from "../../utils/markets";

function MarketsList() {
  const r: GetTokenMetadataRequest = {
    addresses: markets.map((m) => m.contractAddress),
  };
  console.log(r);
  const metadata = useEvmTokenMetadata(r);
  return (
    <div>
      MarketsList

      <div>
        <ul>
          {markets.map((m) => {
            return (
              <li className="market-mention">
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
