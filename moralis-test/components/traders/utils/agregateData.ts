import { EvmTransactionData } from "@moralisweb3/common-evm-utils";
import { BigNumber } from "bignumber.js";
import { AggregatedDataArray, AggregatedTransactionData } from "../TraderPanel";

export function agregateData(data: EvmTransactionData[]): AggregatedDataArray {
  // Assuming `data` is an array of transaction objects
  const aggregatedData: AggregatedTransactionData[] = data.reduce(
    (acc, transaction) => {
      // Use the 'to' address to aggregate transactions, or 'from' if 'to' isn't available
      const address = transaction.to.toString();

      if (!acc[address]) {
        acc[address] = {
          address: address,
          count: 0,
          totalValue: new BigNumber(0),
          totalGasUsed: new BigNumber(0),
          transactions: [],
        };
      }

      acc[address].count += 1;
      acc[address].totalValue = acc[address].totalValue.plus(transaction.value); // assuming transaction.value is a BigNumber
      acc[address].totalGasUsed = acc[address].totalGasUsed.plus(
        transaction.gasUsed,
      );
      acc[address].transactions.push(transaction);

      return acc;
    },
    [],
  );

  // Now convert the aggregated data into an array for sorting and displaying
  const aggregatedDataArray = Object.values(aggregatedData);

  // Sort by total value descending
  aggregatedDataArray.sort((a, b) => b.totalValue.comparedTo(a.totalValue));

  // Now you can create your table
  // For the sake of simplicity, let's log the result
  console.log(aggregatedDataArray);
  return aggregatedDataArray;
}
