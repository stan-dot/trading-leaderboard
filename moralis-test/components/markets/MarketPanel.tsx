"use client";
import useSWR from "swr";
import { DuneRow } from "../../pages/api/dune/[queryNumber]";
import { Market } from "../../utils/markets";
import { SWRProvider } from "../../wrappers/swr-provider";
import LeaderboardPieChart from "./LeaderboardPieChart";
import { LeaderboardTableForMarket } from "./LeaderboardTableForMarket";
import { Erc20Token, EvmChain } from "@moralisweb3/common-evm-utils";
import { useEvmTokenMetadata } from "@moralisweb3/next";
import { evmFetcherConfig } from "../../config/evmFetcherConfig";

const fetcher = (...args) => {
  // console.log(args);
  return fetch(...args).then((res) => res.json());
  // fetch(...args).then(async (res) => {
  // console.log("res: ", res);
  // const m = await res.json();
  // console.log("res json: ", m);
  //   return await res.json();
  // });
};

type MarketPanelProps = {
  id: string;
  market: Market;
};

function MarketPanel({ id, market }: MarketPanelProps) {
  const chain = EvmChain.GOERLI;
  // const { data: tokenData, error: tokenError, isLoading: tokenIsLoading } =
  //   useSWR(`/api/cache_metadata/${id}`, fetcher);
  const {
    data: tokenMetadata,
    isFetching: metadataIsFetching,
    error: metadataError,
  } = useEvmTokenMetadata({
    addresses: [id],
    chain,
  }, evmFetcherConfig);
  console.log("data for market: ", tokenMetadata);
  // const token: Erc20Token = data[0].token;

  const {
    data: duneData,
    error: duneError,
    isLoading: duneIsLoading,
    isValidating: duneisValidating,
  } = useSWR<
    { data: DuneRow[] },
    // DuneMarketResponse,
    any,
    any
  >(
    `/api/dune/${market.duneQueryNumber}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  // console.log("token data :", tokenData);
  console.log("dune data :", duneData);
  console.log("dune loading :", duneIsLoading);

  if (duneisValidating) {
    return <p>isValidating</p>;
  }

  if (duneIsLoading || !duneData) {
    return <p>loading</p>;
  }

  if (duneError) {
    return <p>error loading</p>;
  }

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
        {
          /* <>
          <LeaderboardPieChart rows={duneData.result.rows} />
          <LeaderboardTableForMarket
            rows={duneData.result.rows}
            tableTitle={`Biggest traders for ${market.name}`}
          />
        </> */
        }
        {/* {duneData && duneData.result && duneData.result.rows && duneData.result.rows.length !== 0 */}
        {!duneIsLoading && duneData
          ? (
            <>
              <LeaderboardPieChart rows={duneData.data} />
              <LeaderboardTableForMarket
                rows={duneData.data}
                tableTitle={`Biggest traders for ${market.name}`}
              />
            </>
          )
          : <p>loading data</p>}
        {
          /* {tokenIsLoading && tokenData
          ? <p>token is loading</p>
          : <p>data loaded</p>} */
        }
        {
          /* {data && Array.isArray(data) && data.length !== 0 &&
          <TokenMetadataDisplay token={data[0].token} address={id} />} */
        }
      </div>
    </SWRProvider>
  );
}

export default MarketPanel;
