import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  Pie,
  PieChart
} from "recharts";
import { TableOnContract } from "../components/TableOnContract";
import { Root } from "../types";
import { fetchDataFromDuneApi } from "../utils/fetchData";

export const getServerSideProps: GetServerSideProps<{
  data: Root;
}> = async (context) => {
  const data: Root = await fetchDataFromDuneApi();
  console.log(data);
  return {
    props: { data },
  };
};

function HomePage(
  { data }: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return (
    <div>
      <TableOnContract data={data} />
      <br />
      <PieChart width={730} height={250}>
        <Pie
          data={data.result.rows}
          dataKey="address"
          nameKey="weth_value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#ff00ee"
          label
        />
      </PieChart>;
    </div>
  );
}

export default HomePage;
