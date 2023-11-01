import { Pie, PieChart, Tooltip } from "recharts";
import { Row } from "../types";

const LeaderboardChartTooltip = ({ active, payload, label }) => {
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

type LeaderboardChartProps = {
  rows: Row[];
};

export default function LeaderboardChart({ rows }: LeaderboardChartProps) {
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
          content={LeaderboardChartTooltip}
        />
      </PieChart>
    </div>
  );
}
