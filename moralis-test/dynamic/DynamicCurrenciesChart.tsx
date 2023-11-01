import dynamic from "next/dynamic";

export const DynamicCurrenciesChart = dynamic(
  () => import("../components/TraderPairsChart"),
  { ssr: false },
);
