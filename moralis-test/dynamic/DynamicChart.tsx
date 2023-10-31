import dynamic from "next/dynamic";

export  const DynamicChart = dynamic(
  () => import("../components/LeaderboardChart"),
  { ssr: false },
);

