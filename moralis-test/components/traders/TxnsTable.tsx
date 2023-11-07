"use client";
import { AggregatedDataArray } from "./TraderPanel";
type TxnsTableProps = {
  data: AggregatedDataArray;
};

// todo make this a full table
function TxnsTable({ data: txns }: TxnsTableProps) {
  return (
    <div>
      TxnsTable
      <h3>TXs by this trader, value only</h3>
      <ul>
        {txns && Array.isArray(txns) && txns.length !== 0
          ? txns.map((t, i) => {
            // return <p>nothing</p>;
            return <li key={`txn-${i}`}>{t.totalValue.toString()}</li>;
          })
          : <p>no transactions</p>}
      </ul>
    </div>
  );
}

export default TxnsTable;
