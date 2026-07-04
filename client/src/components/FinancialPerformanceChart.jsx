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

function FinancialPerformanceChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Financial Performance</h3>

      <ResponsiveContainer width="100%" height={320}>
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
            dataKey="grossProfit"
            stroke="#2563eb"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="ebitda"
            stroke="#16a34a"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="netProfit"
            stroke="#dc2626"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FinancialPerformanceChart;