import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { getWalletTxns, WalletTx } from "../api/getWalletTxns";
import { MoralisData } from "../../types/MoralisData";
import { fetchFromMoralis } from "../api/addressMoralis";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { SWRProvider } from "../../wrappers/swr-provider";
import Layout from "../../components/Layout";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getServerSideProps: GetServerSideProps<{
  data: MoralisData;
  // walletTxns: WalletTx[];
  id: string;
}> = async (context) => {
  let id: string;

  // Check if the 'id' query parameter exists
  if (context.query.id) {
    // Check if 'id' is an array
    if (Array.isArray(context.query.id)) {
      // Use the first value from the array or any other logic you prefer
      id = context.query.id[0];
    } else {
      // It's already a string
      id = context.query.id;
    }
  }
  const response = await fetchFromMoralis(id);
  console.log("response in the page: ", response);

  // const txs = await getWalletTxns(id);
  // console.log(txs);
  return {
    props: {
      // pass your fetched data as props or pass the id
      id: id,
      data: response,
      // walletTxns: txs,
    },
  };
};

export default function Page(
  { id, data }: InferGetServerSidePropsType<
    typeof getServerSideProps
  >,
) {
  const { data: helloData, error, isLoading } = useSWR("/api/hello", fetcher);
  console.log(isLoading, error);

  return (
    <Layout>
      <SWRProvider>
        {/* <ChartComponent /> */}
        <h2>trader: {id}</h2>
        {data.result.length === 0 && <p>no data</p>}
        <h3>TXs by this trader, value only</h3>
        {data.result.map((r, i) => {
          return (
            <div key={i}>
              {r.value}
            </div>
          );
        })}
        <h3>txns</h3>
        {!isLoading && <p>{helloData.message}</p>}
        {
          /* {walletTxns.map((t) => {
        return <p>hash: {t.hash}</p>;
      })} */
        }
      </SWRProvider>
      erfc
    </Layout>
  );
}
