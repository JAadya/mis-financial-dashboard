function ProfitSummary({ data }) {
  if (!data) return null;

  const cards = [
    { title: "Revenue", value: data.revenue },
    { title: "Direct Cost", value: data.directCost },
    { title: "Gross Profit", value: data.grossProfit },
    { title: "Operating Cost", value: data.operatingCost },
    { title: "EBITDA", value: data.ebitda },
    { title: "Net Profit", value: data.netProfit },
  ];

  return (
    <div className="chart-card">
      <h3>Profit & Loss Summary</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "#fff",
            }}
          >
            <h4>{card.title}</h4>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              ₹{card.value.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfitSummary;