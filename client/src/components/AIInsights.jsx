function AIInsights({ insights }) {
  if (!insights) return null;

  return (
    <div className="chart-card">
      <h3>AI Financial Insights</h3>

      {insights.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "12px",
            margin: "12px 0",
            background: "#f8fafc",
            borderLeft: "5px solid #2563eb",
            borderRadius: "8px"
          }}
        >
          💡 {item}
        </div>
      ))}
    </div>
  );
}

export default AIInsights;