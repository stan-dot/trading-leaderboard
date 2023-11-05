import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import Layout from "../../components/Layout";
import TraderPanel from "../../components/traders/TraderPanel";

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

export const getServerSideProps: GetServerSideProps<{
  id: string;
}> = async (context) => {
  let id: string;

  if (context.query.id) {
    if (Array.isArray(context.query.id)) {
      // Use the first value from the array or any other logic you prefer
      id = context.query.id[0];
    } else {
      id = context.query.id;
    }
  }
  return {
    props: { id },
  };
};

export default function TraderPage(
  { id }: InferGetServerSidePropsType<
    typeof getServerSideProps
  >,
) {
  // const response = await moralisDataDetails(id);
  // console.log("response in the page: ", response);

  return (
    <Layout>
      Trader page
      <TraderPanel id={id} />
    </Layout>
  );
}
