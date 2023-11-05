import React from "react";
import useSWR from "swr";
type TxnsTableProps = {
  walletId: string;
};

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

function TxnsTable({ walletId }: TxnsTableProps) {
  const { data: walletData, error: walletError, isLoading: walletIsLoading } =
    useSWR(`/api/wallet_txn/${walletId}`, fetcher);
  console.log(walletData, walletIsLoading, walletError);
  return (
    <div>
      TxnsTable
      <h2>trader: {walletId}</h2>
      <h3>TXs by this trader, value only</h3>
      {!walletIsLoading && walletData &&
        walletData.result.map(
          (
            r: {
              value:
                | string
                | number
                | boolean
                | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
                | Iterable<React.ReactNode>
                | React.ReactPortal;
            },
            i: React.Key,
          ) => {
            return (
              <div key={i}>
                {r.value}
              </div>
            );
          },
        )}
      <h3>data message, if anyq</h3>
      {!walletIsLoading && <p>{walletData.message}</p>}
    </div>
  );
}

export default TxnsTable;
