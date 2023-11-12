import React from "react";
import { DuneRowTrader } from "../../pages/api/dune_wallet_history/[walletAddress]";

type TransactionsTableProps = {
  data: DuneRowTrader[];
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({ data }) => {
  if (!data.map) {
    return <p>data not ready</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          {/* <th>Address</th> */}
          {/* <th>Transaction Count</th> */}
          {/* <th>Total Value (ETH)</th> */}
          {/* <th>Total Gas Used</th> */}
          <th>Currency ID</th>
          <th>Total value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {/* <td>{item.address}</td> */}
            {/* <td>{item.count}</td> */}
            {
              /* <td>{item.totalValue.toString()}</td>
            <td>{item.totalGasUsed.toString()}</td> */
            }
            <td>{item.currency_id}</td>
            <td>{item.total_value}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          {/* <td>{data.reduce((acc, item) => acc + item.count, 0)}</td> */}
          <td>feature upcoming</td>
          <td>feature upcoming</td>
          <td>feature upcoming</td>
          {
            /* <td>
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
          </td> */
          }
        </tr>
      </tfoot>
    </table>
  );
};

export default TransactionsTable;
