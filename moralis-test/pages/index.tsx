import Head from "next/head";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Leaderboard explorer</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <h1>home page</h1>
      </Layout>
    </div>
  );
}

export default HomePage;
