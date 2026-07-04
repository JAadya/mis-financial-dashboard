const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const dashboardRoutes = require("./routes/dashboardRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const app = express();

// Connect DB FIRST
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/upload", uploadRoutes);
// Test route
app.get("/", (req, res) => {
    res.send("🚀 FinSight Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});