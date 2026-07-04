const XLSX = require("xlsx");
const generateInsights = require("../utils/gemini");
const uploadFile = async (req, res) => {
  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const months = data[0].slice(1);

    // Helper function to find a row
    const findRow = (keyword) =>
      data.find((row) =>
        row[0]?.toLowerCase().includes(keyword.toLowerCase())
      );

    // Revenue row
    const revenueRow = findRow("Revenue");

    // Direct expense
    const consultantRow = findRow("Technical");

    // Operating expenses
    const stipendRow = findRow("Stipend");
    const rentRow = findRow("Rent");
    const electricityRow = findRow("Electricity");
    const internetRow = findRow("Internet");
    const legalRow = findRow("Legal");
    const marketingRow = findRow("Business Promotion");
    const travelRow = findRow("Travelling");
    const subscriptionRow = findRow("Subscription");
    const bankRow = findRow("Bank");
    const miscRow = findRow("Misc");

    // Revenue Trend
    const revenueTrend = months.map((month, i) => {

  const revenue = Number(revenueRow?.[i + 1] || 0);

  const consultant = Number(consultantRow?.[i + 1] || 0);

  const operatingExpenses =
    Number(stipendRow?.[i + 1] || 0) +
    Number(rentRow?.[i + 1] || 0) +
    Number(electricityRow?.[i + 1] || 0) +
    Number(internetRow?.[i + 1] || 0) +
    Number(legalRow?.[i + 1] || 0) +
    Number(marketingRow?.[i + 1] || 0) +
    Number(travelRow?.[i + 1] || 0) +
    Number(subscriptionRow?.[i + 1] || 0) +
    Number(bankRow?.[i + 1] || 0) +
    Number(miscRow?.[i + 1] || 0);

  return {
    month,
    revenue,
    expenses: consultant + operatingExpenses
  };
});

    // Expense Pie
    let expenseBreakdown = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];

      if (!row[0]) continue;
      if (row[0].toLowerCase().includes("revenue")) continue;

      expenseBreakdown.push({
        name: row[0],
        value: row.slice(1).reduce((a, b) => a + (Number(b) || 0), 0)
      });
    }

    // NEW Financial Performance
    const financialPerformance = months.map((month, i) => {
      const revenue = Number(revenueRow?.[i + 1] || 0);

      const consultant = Number(consultantRow?.[i + 1] || 0);

      const operatingExpenses =
        Number(stipendRow?.[i + 1] || 0) +
        Number(rentRow?.[i + 1] || 0) +
        Number(electricityRow?.[i + 1] || 0) +
        Number(internetRow?.[i + 1] || 0) +
        Number(legalRow?.[i + 1] || 0) +
        Number(marketingRow?.[i + 1] || 0) +
        Number(travelRow?.[i + 1] || 0) +
        Number(subscriptionRow?.[i + 1] || 0) +
        Number(bankRow?.[i + 1] || 0) +
        Number(miscRow?.[i + 1] || 0);

      const grossProfit = revenue - consultant;

      const ebitda = grossProfit - operatingExpenses;

      const netProfit = ebitda;

      return {
        month,
        grossProfit,
        ebitda,
        netProfit
      };
    });

    // KPI totals
    const totalRevenue = revenueTrend.reduce(
      (sum, item) => sum + item.revenue,
      0
    );

    const totalExpenses = expenseBreakdown.reduce(
      (sum, item) => sum + item.value,
      0
    );
    const directCost = consultantRow
  ? consultantRow.slice(1).reduce((sum, val) => sum + Number(val || 0), 0)
  : 0;

const operatingCost =
  (stipendRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (rentRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (electricityRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (internetRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (legalRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (marketingRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (travelRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (subscriptionRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (bankRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0) +
  (miscRow?.slice(1).reduce((s, v) => s + Number(v || 0), 0) || 0);

const grossProfit = totalRevenue - directCost;
const ebitda = grossProfit - operatingCost;
// -------- AI Insights --------

// Generate AI Insights using Gemini
const aiInsights = await generateInsights({
  revenue: totalRevenue,
  expenses: totalExpenses,
  directCost,
  grossProfit,
  operatingCost,
  ebitda,
  netProfit: ebitda,
  revenueTrend,
  financialPerformance
});

res.json({
  revenue: totalRevenue,
  expenses: totalExpenses,
  grossProfit: totalRevenue - totalExpenses,
  netProfit: totalRevenue - totalExpenses,

  profitSummary: {
    revenue: totalRevenue,
    directCost,
    grossProfit,
    operatingCost,
    ebitda,
    netProfit: ebitda
  },

  aiInsights,

  revenueTrend,
  expenseBreakdown,
  financialPerformance
});

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Upload failed" });
  }
};

module.exports = { uploadFile };