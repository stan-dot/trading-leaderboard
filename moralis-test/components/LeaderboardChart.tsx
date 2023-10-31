import { Pie, PieChart, Tooltip } from "recharts";
import { Row } from "../types";

const CustomTooltip = ({ active, payload, label }) => {
  console.log("active: ", active, " payload: ", payload, " label: ", label);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Address: ${payload[0].name}`}</p>
        <p className="intro">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

type MyPieChartProps = {
  rows: Row[];
};

export default function MyPieChart({ rows }: MyPieChartProps) {
  return (
    <div>
      <h2>Pie chart for this contract: </h2>
      <PieChart width={730} height={250}>
        <Pie
          data={rows}
          dataKey="weth_value"
          nameKey="address"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#ff00ee"
        />
        <Tooltip
          content={CustomTooltip}
        />
      </PieChart>
    </div>
  );
}
