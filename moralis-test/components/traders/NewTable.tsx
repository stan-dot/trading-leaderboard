import React from "react";
import { BigNumber } from "bignumber.js";
import { AggregatedTransactionData } from "./TraderPanel";

type TransactionsTableProps = {
  data: AggregatedTransactionData[];
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>Transaction Count</th>
          <th>Total Value (ETH)</th>
          <th>Total Gas Used</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.address}</td>
            <td>{item.count}</td>
            <td>{item.totalValue.toString()}</td>
            <td>{item.totalGasUsed.toString()}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{data.reduce((acc, item) => acc + item.count, 0)}</td>
          <td>
            {data.reduce(
              (acc, item) => acc.plus(item.totalValue),
              new BigNumber(0),
            ).toString()}
          </td>
          <td>
            {data.reduce(
              (acc, item) => acc.plus(item.totalGasUsed),
              new BigNumber(0),
            ).toString()}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TransactionsTable;
