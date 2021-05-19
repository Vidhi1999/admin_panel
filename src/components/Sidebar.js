import "./Sidebar.scss";
import Card from "@material-ui/core/Card";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div>
      <div className="fa-icon">
        {showLinks ? (
          <FaTimes onClick={() => setShowLinks(!showLinks)} />
        ) : (
          <FaBars onClick={() => setShowLinks(!showLinks)} />
        )}
      </div>
      <Card className="sidebar-card">
        <div className="sidebar-menu" id={showLinks ? "_expand" : ""}>
          <NavLink
            id="white-btn"
            to="/addlocation"
            activeStyle={{
              backgroundColor: "#13bae5",
              color: "white",
              border: "1px solid #13bae5",
            }}
          >
            Add/View Loacations
          </NavLink>
          <NavLink
            id="white-btn"
            to="/addprofession"
            activeStyle={{
              backgroundColor: "#13bae5",
              color: "white",
              border: "1px solid #13bae5",
            }}
          >
            Add/View Professions
          </NavLink>
          <NavLink
            id="white-btn"
            to="/createaccount"
            activeStyle={{
              backgroundColor: "#13bae5",
              color: "white",
              border: "1px solid #13bae5",
            }}
          >
            Create/Delete Staff Account
          </NavLink>
          <NavLink
            id="white-btn"
            to="/blockaccount"
            activeStyle={{
              backgroundColor: "#13bae5",
              color: "white",
              border: "1px solid #13bae5",
            }}
          >
            Block/Restore Staff Account
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
