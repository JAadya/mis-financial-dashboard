import {
  LineChart,
  Line,
 CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

function RevenueChart({ data }) {
  return (
    <div className="chart-card">

      <h3>Revenue vs Expenses</h3>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart
  data={data}
  margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis
  width={70}
  tickFormatter={(value) => `₹${Math.round(value / 100000)}L`}
/>

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#dc2626"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;