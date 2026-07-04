import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">

      <div>
        <h2>Financial MIS Dashboard</h2>
      </div>

      <div className="nav-right">

        <input
          type="text"
          placeholder="Search..."
        />

        <FaBell size={20}/>

        <div className="profile">
          AJ
        </div>

      </div>

    </div>
  );
}

export default Navbar;