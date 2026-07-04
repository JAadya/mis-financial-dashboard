import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function KPIcard({ title, value, change, positive }) {
  return (
    <div className="card">

      <div className="card-top">
        <h4>{title}</h4>
      </div>

      <h2>{value}</h2>

      <div
        className={`change ${positive ? "positive" : "negative"}`}
      >
        {positive ? <FaArrowUp /> : <FaArrowDown />}
        <span>{change}</span>
      </div>

    </div>
  );
}

export default KPIcard;