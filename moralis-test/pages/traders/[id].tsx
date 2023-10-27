import { useRouter } from "next/router";
import ChartComponent from "../../components/TraderChart";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <ChartComponent />
      <p>trader: {router.query.id}</p>
    </>
  );
}
