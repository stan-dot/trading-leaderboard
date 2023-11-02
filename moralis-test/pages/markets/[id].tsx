import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import useSWR from "swr";
import { SWRProvider } from "../../wrappers/swr-provider";
import { fetchFromMoralis } from "../api/fetchFromMoralis";
import Layout from "../../components/Layout";

// 0x98a47a182880e0b94a403f9f174116d816d171de	https://goerli.etherscan.io/address/0x98a47a182880e0b94a403f9f174116d816d171de	green
// 0x1325712f116faddb20c8905bb0c41bb3be1247c1	https://goerli.etherscan.io/address/0x1325712f116faddb20c8905bb0c41bb3be1247c1	red
// 0x32692d2d6837dd9e48fb2dc8b703b2621b0e2a6c	https://goerli.etherscan.io/address/0x32692d2d6837dd9e48fb2dc8b703b2621b0e2a6c	yellow
// 0x36ebee707d6a0931a0b9d6fabec252fb9f2865ac	https://goerli.etherscan.io/address/0x36ebee707d6a0931a0b9d6fabec252fb9f2865ac	blue
// 0xd3664b5e72b46eaba722ab6f43c22dbf40181954	https://goerli.etherscan.io/address/0xd3664b5e72b46eaba722ab6f43c22dbf40181954	usdc
// 0x2715ccea428f8c7694f7e78b2c89cb454c5f7294	https://goerli.etherscan.io/address/0x2715ccea428f8c7694f7e78b2c89cb454c5f7294	weth

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
  const { data: helloData, error, isLoading } = useSWR("/api/hello");

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
        {!isLoading && <p>{helloData}</p>}
        {
          /* {walletTxns.map((t) => {
        return <p>hash: {t.hash}</p>;
      })} */
        }
      </SWRProvider>
    </Layout>
  );
}
