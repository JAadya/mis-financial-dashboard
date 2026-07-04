import {
  FaChartPie,
  FaUpload,
  FaChartLine,
  FaRobot,
  FaFileAlt,
  FaCog
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">FinSight AI</h2>

      <ul>

        <li>
          <a href="#dashboard">
            <FaChartPie />
            <span>Dashboard</span>
          </a>
        </li>

        <li>
          <a href="#upload">
            <FaUpload />
            <span>Upload Data</span>
          </a>
        </li>

        <li>
          <a href="#analytics">
            <FaChartLine />
            <span>Analytics</span>
          </a>
        </li>

        <li>
          <a href="#ai-insights">
            <FaRobot />
            <span>AI Insights</span>
          </a>
        </li>

        <li>
          <a href="#reports">
            <FaFileAlt />
            <span>Reports</span>
          </a>
        </li>

        <li>
          <a href="#settings">
            <FaCog />
            <span>Settings</span>
          </a>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;