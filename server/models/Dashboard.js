const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
    revenue: Number,
    expenses: Number,
    grossProfit: Number,
    netProfit: Number,
    bankBalance: Number,
    cashBalance: Number
});

module.exports = mongoose.model("Dashboard", dashboardSchema);