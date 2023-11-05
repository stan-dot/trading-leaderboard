import dynamic from "next/dynamic";

export const DynamicLeaderboardChart = dynamic(
  () => import("../components/markets/LeaderboardChart"),
  { ssr: false },
);
