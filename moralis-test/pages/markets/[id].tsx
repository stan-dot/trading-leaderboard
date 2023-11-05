import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import Layout from "../../components/Layout";
import MarketPanel from "../../components/markets/MarketPanel";
import { Market, markets } from "../../utils/markets";

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
      <h1>Market panel</h1>
      <MarketPanel
        id={id}
        market={market}
      />
    </Layout>
  );
}
