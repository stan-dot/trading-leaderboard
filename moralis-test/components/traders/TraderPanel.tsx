"use client";
import {
  EvmChain,
  EvmTransactionData,
  GetWalletTransactionsRequest,
} from "@moralisweb3/common-evm-utils";
import { useEvmWalletTransactions } from "@moralisweb3/next";
import { evmFetcherConfig } from "../../config/evmFetcherConfig";

import { BigNumber } from "bignumber.js";
import TransactionsTable from "./NewTable";
import { SimplePieChart } from "./SimpleChart";
import { agregateData } from "./utils/agregateData";

export type AggregatedTransactionData = {
  address: string;
  count: number;
  totalValue: BigNumber;
  totalGasUsed: BigNumber;
  transactions: EvmTransactionData[]; // Array of original transaction data
};

export type AggregatedDataArray = AggregatedTransactionData[];

type TraderPanelProps = {
  id: string;
};

function TraderPanel({ id }: TraderPanelProps) {
  const chain = EvmChain.GOERLI;
  // const { data: walletData, error: walletError, isLoading: walletIsLoading } =
  //   useSWR(`/api/wallet_txn/${walletId}`, fetcher);

  const request: GetWalletTransactionsRequest = {
    address: id,
    chain,
    limit: 10,
  };

  const { data, isFetching, error } = useEvmWalletTransactions(
    request,
    evmFetcherConfig,
  );

  console.log("data in txns table: ", data);
  if (error) {
    return (
      <div>
        <h3>error fetching data for this trader</h3>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div>
        <h3>fetching data for this trader...</h3>
      </div>
    );
  }
  // todo aggregate data here and then only forward
  const a = agregateData(data);

  return (
    <div>
      TraderPanel
      <h2>wallet address: {id}</h2>
      {/* <TraderPairsChart aggregatedData={a} /> */}
      <SimplePieChart data={a} />
      {/* <TxnsTable data={a} /> */}
      <TransactionsTable data={a} />
    </div>
  );
}

export default TraderPanel;
