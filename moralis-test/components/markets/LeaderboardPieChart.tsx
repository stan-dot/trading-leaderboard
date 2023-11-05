"use client";
import { Pie, PieChart, Tooltip } from "recharts";
import { Row } from "../../types/DuneResponse";

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

export default function LeaderboardPieChart({ rows }: LeaderboardChartProps) {
  return (
    <div>
      <h3>Top traders on this market</h3>
      {!rows || rows.length === 0
        ? <p>no rows</p>
        : (
          <PieChart width={730} height={250}>
            <Pie
              data={rows}
              dataKey="value"
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
        )}
    </div>
  );
}
