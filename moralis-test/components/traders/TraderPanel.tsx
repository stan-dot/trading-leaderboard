"use client";
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
