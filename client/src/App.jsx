import { useEffect, useState } from "react";
import API from "./api/dashboardApi";
import "./App.css";

import FinancialPerformanceChart from "./components/FinancialPerformanceChart";
import RevenueChart from "./components/RevenueChart";
import ExpensePieChart from "./components/ExpensePieChart";
import ProfitLossTable from "./components/ProfitLossTable";
import AIInsights from "./components/AIInsights";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import KPIcard from "./components/KPIcard";
import UploadPage from "./components/UploadPage";
import ProfitSummary from "./components/ProfitSummary";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/dashboard");
        setBackendData(res.data.data || res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        {/* Upload */}
        <div id="upload">
          <UploadPage setBackendData={setBackendData} />
        </div>

        {/* KPI Cards */}
        <div id="dashboard">
          <div className="cards">
            <KPIcard title="Revenue" value={backendData?.revenue || 0} />
            <KPIcard title="Expenses" value={backendData?.expenses || 0} />
            <KPIcard title="Gross Profit" value={backendData?.grossProfit || 0} />
            <KPIcard title="Net Profit" value={backendData?.netProfit || 0} />
          </div>
        </div>

        {/* Revenue + Expense Charts */}
        <div id="analytics">
          <div className="charts">
            {backendData?.revenueTrend && (
              <RevenueChart data={backendData.revenueTrend} />
            )}

            {backendData?.expenseBreakdown && (
              <ExpensePieChart data={backendData.expenseBreakdown} />
            )}
          </div>

          {/* Financial Performance */}
          {backendData?.financialPerformance && (
            <FinancialPerformanceChart
              data={backendData.financialPerformance}
            />
          )}
        </div>

        {/* Reports */}
        <div id="reports">
          {backendData?.profitSummary && (
            <ProfitSummary data={backendData.profitSummary} />
          )}
        </div>

        {/* AI Insights */}
        <div id="ai-insights">
          {backendData?.aiInsights && (
            <AIInsights insights={backendData.aiInsights} />
          )}
        </div>

        {/* Profit & Loss Table (Optional) */}
        {backendData?.profitLossTrend?.length > 0 && (
          <ProfitLossTable rows={backendData.profitLossTrend} />
        )}

        {/* Settings */}
        <div id="settings" className="chart-card">
          <h3>Settings</h3>

          
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;