"use client";

import { EvmTransactionData } from "@moralisweb3/common-evm-utils";
import { BigNumber } from "bignumber.js";
import useSWR from "swr";
import { DuneRowTrader } from "../../pages/api/dune_wallet_history/[walletAddress]";
import TransactionsTable from "./NewTable";

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

export type AggregatedTransactionData = {
  address: string;
  count: number;
  totalValue: BigNumber;
  totalGasUsed: BigNumber;
  transactions: EvmTransactionData[]; // Array of original transaction data
};

type TraderPanelProps = {
  id: string;
};

function TraderPanel({ id }: TraderPanelProps) {
  // const chain = EvmChain.GOERLI;

  // hard coded id example 1
  const hardCodedTraderId = "0xe865bd3ed38dae3fa6829e2574d61676d55468ef";
  if (id !== hardCodedTraderId) {
    return <p>not ready to check this trader&apos;s panel</p>;
  }

  const { data: dataWrapper, error, isLoading } = useSWR<
    { data: DuneRowTrader[] },
    any,
    any
  >(
    `/api/dune_wallet_history/${hardCodedTraderId}`,
    fetcher,
  );

  // const request: GetWalletTransactionsRequest = {
  //   address: id,
  //   chain,
  //   limit: 10,
  // };

  // const { data, isFetching, error, total, cursor } = useEvmWalletTransactions(
  //   request,
  //   evmFetcherConfig,
  // );

  // console.log("data in txns table: ", data);
  // console.log("total and cursor", total, "cursos: ", cursor);
  if (error) {
    return (
      <div>
        <h3>error fetching data for this trader</h3>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h3>fetching data for this trader...</h3>
      </div>
    );
  }
  // todo aggregate data here and then only forward
  // const a = agregateData(data);

  console.log("data: ", dataWrapper);
  return (
    <div>
      TraderPanel
      <h2>wallet address: {id}</h2>
      {/* {a.length === 0 && <p>No rows here</p>} */}
      {/* <SimplePieChart data={a} /> */}
      <TransactionsTable data={dataWrapper.data} />
      {/* <p>data length: {data}</p> */}
    </div>
  );
}

export default TraderPanel;
