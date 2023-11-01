import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { TableOnContract } from "../components/TableOnContract";
import { Root, Row } from "../types";
import { DynamicLeaderboardChart } from "../dynamic/DynamicLeaderboardChart";
import Head from "next/head";

export const mockRows: Row[] = [
  { address: "0xfd3f35e6dedb01d57200e0217a7893d6dc794208", weth_value: 6736 },
  {
    address: "0x72bebd20d1c8f5f5875d616dd53885288076fbc3",
    weth_value: 2764.9999999999995,
  },
  { address: "0x69f8d754c5f4f73aad00f3c22eafb77aa57ff1bc", weth_value: 2107 },
  { address: "0x9d124cc327baefe179ae5fd0d3c37d116f60a490", weth_value: 1884 },
  {
    address: "0x10bc7c3aae1f2f792097b96dd8b37030d9e66088",
    weth_value: 1855.3100000000002,
  },
  { address: "0xefaae5897480c62725f90edfa2f933be579c05a5", weth_value: 1690 },
  { address: "0xda4310f3d615fead9be10f0bff2b40eff135e683", weth_value: 1650 },
  {
    address: "0xe27a756e9edb3ad4e5f6f9de06cda68e2c7d3acf",
    weth_value: 1600.3500000000001,
  },
  {
    address: "0x5c479a8dd46be4089a8bb9073c6c84c9b61978cb",
    weth_value: 1580.85,
  },
  { address: "0x60520172cf716257371da9520cccfa9aa3b27333", weth_value: 1400 },
];

export const getServerSideProps: GetServerSideProps<{
  data?: Root;
  name: string;
}> = async (context) => {
  return { props: { name: "test" } };
  // const data: Root = await fetchDataFromDuneApi();

  // console.log(data);
  // return {
  //   props: { data },
  // };
};

function HomePage(
  { name }: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div>
      <Head>
        <title>Leaderboard explorer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>home page</h1>
      <TableOnContract rows={mockRows} tableTitle="weth data" />
      <br />
      <DynamicLeaderboardChart rows={mockRows} />
    </div>
  );
}

export default HomePage;
