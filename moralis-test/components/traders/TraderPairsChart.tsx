import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

export type TransactionPart = {
  value: number;
  soldAsset: string;
  boughtAsset: string;
};

export type TraderPairsChartProps = {
  data: TransactionPart[];
};

const TraderPairsChart = ({ data }: TraderPairsChartProps) => {
  const chartData = getFormattedData(data);

  // Colors for each cell in the pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{ padding: 2, margin: 20, border: "1px #f00 solid" }}>
      <h2>Piechart</h2>
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
    </div>
  );
};

export default TraderPairsChart;
function getFormattedData(data: TransactionPart[]) {
  const aggregatedData = data.reduce((acc, item) => {
    const key = item.soldAsset;
    if (!acc[key]) {
      acc[key] = { name: key, value: 0 };
    }
    acc[key].value += item.value;
    return acc;
  }, {});

  const chartData = Object.values(aggregatedData);
  return chartData;
}

