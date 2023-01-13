import React from "react";
import { NavLink } from "react-router-dom";
const setActive = ({ isActive }) => (isActive ? "active-link " : "not-Active");

const Header = () => {
  return (
    <div>
      <header className="header">
        <NavLink to="/" className={setActive}>
          {" "}
          Home
        </NavLink>
        <NavLink to="/jobs" className={setActive}>
          Jobs
        </NavLink>
        <NavLink to="/companies" className={setActive}>
          Companies
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
