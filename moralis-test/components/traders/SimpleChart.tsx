import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { AggregatedDataArray } from "./TraderPanel";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28FEF"];

export const SimplePieChart = ({ data }: { data: AggregatedDataArray }) => (
    <div style={{ padding: 2, margin: 20, border: "1px #f00 solid" }}>
      <h2>Piechart for the trader pairs chart</h2>
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={({ name, percent }) =>
        `${name}: ${(percent * 100).toFixed(0)}%`}
      outerRadius={80}
      fill="#8884d8"
      dataKey="totalValue" // or "count" if you want to show the number of transactions
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
  </div>
);

