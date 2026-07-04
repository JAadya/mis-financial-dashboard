require("dotenv").config();
const mongoose = require("mongoose");
const Dashboard = require("./models/Dashboard");

mongoose.connect(process.env.MONGO_URI).then(async () => {

    await Dashboard.deleteMany();

    await Dashboard.create({
        revenue: 1250000,
        expenses: 720000,
        grossProfit: 530000,
        netProfit: 450000,
        bankBalance: 300000,
        cashBalance: 85000
    });

    console.log("✅ Seed Data Inserted");
    process.exit();

});