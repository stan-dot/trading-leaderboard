import dynamic from "next/dynamic";

export const DynamicCurrenciesChart = dynamic(
  () => import("../components/traders/TraderPairsChart"),
  { ssr: false },
);
