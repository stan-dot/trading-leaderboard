import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

type TransactionPart = {
  weth_value: number;
  soldAsset: string;
  boughtAsset: string;
};

type TraderPairsChartProps = {
  data: TransactionPart[];
};
const TraderPairsChart = ({ data }: TraderPairsChartProps) => {
  // Aggregate data
  const aggregatedData = data.reduce((acc, item) => {
    const key = item.soldAsset; // Assuming soldAsset is the eth address
    if (!acc[key]) {
      acc[key] = { name: key, value: 0 };
    }
    acc[key].value += item.weth_value;
    return acc;
  }, {});

  const chartData = Object.values(aggregatedData);

  // Colors for each cell in the pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={chartData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default TraderPairsChart;
