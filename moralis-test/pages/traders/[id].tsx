import { useEvmWalletTransactionsVerbose } from "@moralisweb3/next";
import { useRouter } from "next/router";
import ChartComponent from "../../components/TestLinearChart";
import { fetchFromMoralis } from "../../utils/fetchFromMoralis";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { MoralisData } from "../../utils/MoralisData";

export const getServerSideProps: GetServerSideProps<{
  data: MoralisData;
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

  // Fetch data or perform other server-side operations using the 'id'
  // todo make it client side, this is too big. might need to cache? but the players change
  const response = await fetchFromMoralis(id);
  console.log("response in the page: ", response);

  return {
    props: {
      // pass your fetched data as props or pass the id
      id: id,
      data: response,
    },
  };
};

export default function Page(
  { id, data }: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  // const router = useRouter();
  // let address = router.query.id;
  // must be string
  // const r = useEvmWalletTransactionsVerbose({ address: id });

  return (
    <>
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
    </>
  );
}
