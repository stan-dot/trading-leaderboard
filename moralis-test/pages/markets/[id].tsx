import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import useSWR from "swr";
import { SWRProvider } from "../../wrappers/swr-provider";
import { fetchFromMoralis } from "../api/addressMoralis";
import Layout from "../../components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
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
  const { data, error, isLoading } = useSWR("/api/dune/", fetcher);

  return (
    <Layout>
      <SWRProvider>
        {/* <ChartComponent /> */}
        <h2>market: {id}</h2>
        <h3>top traders on this market</h3>
        <h3>txns</h3>
        {!isLoading && <p>{data}</p>}
      </SWRProvider>
    </Layout>
  );
}
