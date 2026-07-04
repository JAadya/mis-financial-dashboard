import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

const COLORS = [
  "#4fedbe",
  "#457456",
  "#22992a",
  "#adefc1",
  "#a1a1a1",
  "#ffffff"
];

function ExpensePieChart({ data }) {
  return (
    <div className="chart-card expense-chart">
      <h3>Expense Breakdown</h3>

      <ResponsiveContainer width="100%" height={420}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="45%"
            outerRadius={120}
            label={false}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) => `₹${value.toLocaleString()}`}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{ paddingTop: "20px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensePieChart;