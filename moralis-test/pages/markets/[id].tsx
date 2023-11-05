import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import useSWR from "swr";
import Layout from "../../components/Layout";
import MarketPanel from "../../components/markets/MarketPanel";
import { Market, markets } from "../../utils/markets";
import { SWRProvider } from "../../wrappers/swr-provider";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getServerSideProps: GetServerSideProps<{
  id: string;
  market: Market | null;
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
  const market = markets.find((m) => m.contractAddress === id);

  return {
    props: {
      // pass your fetched data as props or pass the id
      id,
      market,
    },
  };
};

export default function MarketPage(
  { id, market }: InferGetServerSidePropsType<
    typeof getServerSideProps
  >,
) {
  return (
    <Layout>
      <SWRProvider>
        <h2>market: {id}</h2>
        <div>
          <h3>About the market</h3>
          <div>
            {market.name}
          </div>
        </div>
        <h3>top traders on this market</h3>
        <MarketPanel
          id={id}
          market={market}
        />
      </SWRProvider>
    </Layout>
  );
}
