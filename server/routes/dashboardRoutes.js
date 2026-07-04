const express = require("express");
const router = express.Router();

let latestData = null;

// GET dashboard data
router.get("/", (req, res) => {
  res.json(latestData || {
    revenue: 0,
    expenses: 0,
    grossProfit: 0,
    netProfit: 0,
    revenueTrend: [],
    expenseBreakdown: []
  });
});

// setter route (used by upload)
router.post("/set", (req, res) => {
  latestData = req.body;
  res.json({ message: "Dashboard updated" });
});

module.exports = router;