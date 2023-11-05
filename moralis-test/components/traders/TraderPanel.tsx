"use client";
import React from "react";
import { LeaderboardTableForMarket } from "../markets/LeaderboardTableForMarket";
import TraderPairsChart from "./TraderPairsChart";

type TraderPanelProps = {
  id: string;
};

function TraderPanel({ id }: TraderPanelProps) {
  return (
    <div>
      TraderPanel
      <TraderPairsChart data={[]} />
    </div>
  );
}

export default TraderPanel;
