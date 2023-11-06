"use client";
import React, { Suspense } from "react";
import useSWR from "swr";
import LeaderboardPieChart from "./LeaderboardPieChart";
import { LeaderboardTableForMarket } from "./LeaderboardTableForMarket";
import { Market } from "../../utils/markets";
import { Row } from "../../types/DuneResponse";
import TokenMetadataDisplay from "./TokenMetadataCard";
import { SWRProvider } from "../../wrappers/swr-provider";
import { useEvmTokenMetadata } from "@moralisweb3/next";
import { Erc20Token, EvmChain } from "@moralisweb3/common-evm-utils";

export const mockRows: Row[] = [
  { address: "0xfd3f35e6dedb01d57200e0217a7893d6dc794208", value: 6736 },
  {
    address: "0x72bebd20d1c8f5f5875d616dd53885288076fbc3",
    value: 2764.9999999999995,
  },
  { address: "0x69f8d754c5f4f73aad00f3c22eafb77aa57ff1bc", value: 2107 },
  { address: "0x9d124cc327baefe179ae5fd0d3c37d116f60a490", value: 1884 },
  {
    address: "0x10bc7c3aae1f2f792097b96dd8b37030d9e66088",
    value: 1855.3100000000002,
  },
  { address: "0xefaae5897480c62725f90edfa2f933be579c05a5", value: 1690 },
  { address: "0xda4310f3d615fead9be10f0bff2b40eff135e683", value: 1650 },
  {
    address: "0xe27a756e9edb3ad4e5f6f9de06cda68e2c7d3acf",
    value: 1600.3500000000001,
  },
  {
    address: "0x5c479a8dd46be4089a8bb9073c6c84c9b61978cb",
    value: 1580.85,
  },
  { address: "0x60520172cf716257371da9520cccfa9aa3b27333", value: 1400 },
];

const fetcher = (...args) => fetch(...args).then((res) => res.json());

type MarketPanelProps = {
  id: string;
  market: Market;
};

function MarketPanel({ id, market }: MarketPanelProps) {
  // const { data: tokenData, error: tokenError, isLoading: tokenIsLoading } =
  //   useSWR(`/api/cache_metadata/${id}`, fetcher);
  const { data } = useEvmTokenMetadata({
    addresses: [id],
    chain: EvmChain.GOERLI,
  });
  // const token: Erc20Token = data[0].token;

  const { data: duneData, error: duneError, isLoading: duneIsLoading } = useSWR(
    `/api/dune/${market.duneQueryNumber}`,
    fetcher,
  );
  // console.log("token data :", tokenData);
  console.log("dune data :", duneData);

  return (
    <SWRProvider>
      <div>
        <h2>market: {id}</h2>
        <div>
          <h3>About the market</h3>
          <div>
            {market.name}
          </div>
        </div>
        {/* <LeaderboardPieChart rows={mockRows} /> */}
        <Suspense fallback={<p>loading</p>}>
          <LeaderboardPieChart rows={duneData} />
          {/* <LeaderboardTableForMarket rows={mockRows} tableTitle={`Biggest traders for ${market.name}`} /> */}
          <LeaderboardTableForMarket
            rows={duneData}
            tableTitle={`Biggest traders for ${market.name}`}
          />
        </Suspense>
        {
          /* {tokenIsLoading && tokenData
          ? <p>token is loading</p>
          : <p>data loaded</p>} */
        }
        {data && Array.isArray(data) && data.length !== 0 &&
          <TokenMetadataDisplay token={data[0].token} address={id} />}
      </div>
    </SWRProvider>
  );
}

export default MarketPanel;
