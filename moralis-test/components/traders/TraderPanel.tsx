"use client";
import TraderPairsChart from "./TraderPairsChart";
import TxnsTable from "./TxnsTable";

type TraderPanelProps = {
  id: string;
};

function TraderPanel({ id }: TraderPanelProps) {
  return (
    <div>
      TraderPanel
      <TraderPairsChart data={[]} />
      <TxnsTable walletId={id} />
    </div>
  );
}

export default TraderPanel;
