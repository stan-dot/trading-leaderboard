import dynamic from "next/dynamic";

export const DynamicLeaderboardChart = dynamic(
  () => import("../components/LeaderboardChart"),
  { ssr: false },
);
