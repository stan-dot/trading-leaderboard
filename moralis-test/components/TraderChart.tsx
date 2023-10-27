import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "Sep 17", value: 0 },
  { date: "Sep 10", value: 80 },
  { date: "Sep 19", value: 120 },
  { date: "Oct 10", value: 100 },
  { date: "Oct 19", value: 90 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p>{`Date: ${payload[0].payload.date}`}</p>
        <p>{`Value: $${payload[0].value}M`}</p>
      </div>
    );
  }
  return null;
};

const ChartComponent = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Tooltip content={<CustomTooltip active={true} payload={data} />} />
    </LineChart>
  );
};

export default ChartComponent;
