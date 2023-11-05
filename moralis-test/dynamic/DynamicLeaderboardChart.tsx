import dynamic from "next/dynamic";

export const DynamicLeaderboardChart = dynamic(
  () => import("../components/markets/LeaderboardPieChart"),
  { ssr: false },
);
