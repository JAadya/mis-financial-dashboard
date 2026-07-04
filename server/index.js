const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
const dashboardRoutes = require("./routes/dashboardRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});