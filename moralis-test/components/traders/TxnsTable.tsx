import {
  EvmChain,
  EvmTransaction,
  GetWalletTransactionsRequest,
} from "@moralisweb3/common-evm-utils";
import { useEvmWalletTransactions } from "@moralisweb3/next";
import { evmFetcherConfig } from "../../config/evmFetcherConfig";
type TxnsTableProps = {
  walletId: string;
};

// const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

function TxnsTable({ walletId }: TxnsTableProps) {
  // const { data: walletData, error: walletError, isLoading: walletIsLoading } =
  //   useSWR(`/api/wallet_txn/${walletId}`, fetcher);

  const request: GetWalletTransactionsRequest = {
    address: walletId,
    chain: EvmChain.GOERLI,
    limit: 10,
  };
  const { data } = useEvmWalletTransactions(request, evmFetcherConfig);

  console.log("data: ", data);
  // console.log(walletData, walletIsLoading, walletError);
  return (
    <div>
      TxnsTable
      <h2>trader: {walletId}</h2>
      <h3>TXs by this trader, value only</h3>
      {
        /* {!walletIsLoading && walletData &&
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
        )} */
      }
      <h3>data message, if any</h3>
      <ul>
        {data && Array.isArray(data) && data.length !== 0
          ? data.map((t) => {
            return <li>{t.blockHash}</li>;
          })
          : <p>no data</p>}
      </ul>
      {/* {!walletIsLoading && <p>{walletData.message}</p>} */}
    </div>
  );
}

export default TxnsTable;
