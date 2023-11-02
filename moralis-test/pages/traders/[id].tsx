import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import useSWR from "swr";
import Layout from "../../components/Layout";
import { SWRProvider } from "../../wrappers/swr-provider";
import { DynamicCurrenciesChart } from "../../dynamic/DynamicCurrenciesChart";

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

export const getServerSideProps: GetServerSideProps<{
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

  return {
    props: {
      // pass your fetched data as props or pass the id
      id: id,
    },
  };
};

export default function Page(
  { id }: InferGetServerSidePropsType<
    typeof getServerSideProps
  >,
) {
  const { data: walletData, error: walletError, isLoading: walletIsLoading } =
    useSWR("/api/wallet_txn", fetcher);
  console.log(walletData, walletIsLoading, walletError);
  const { data: tokenData, error: tokenError, isLoading: tokenIsLoading } =
    useSWR("/api/cache_metadata", fetcher);

  console.log(tokenData);
  // const response = await moralisDataDetails(id);
  // console.log("response in the page: ", response);

  return (
    <Layout>
      <SWRProvider>
        {/* <ChartComponent /> */}
        <h2>trader: {id}</h2>
        {/* {data.result.length === 0 && <p>no data</p>} */}
        <h3>TXs by this trader, value only</h3>
        {!walletIsLoading && walletData && walletData.result.map((r, i) => {
          return (
            <div key={i}>
              {r.value}
            </div>
          );
        })}
        <h3>txns</h3>
        <DynamicCurrenciesChart data={[]} />
        {!walletIsLoading && <p>{walletData.message}</p>}
        <div>
          <h3>Token data stuff</h3>
        </div>
      </SWRProvider>
    </Layout>
  );
}
