import dynamic from "next/dynamic";

export  const DynamicChart = dynamic(
  () => import("../components/MyPieChart"),
  { ssr: false },
);

