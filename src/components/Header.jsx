import React from "react";
import { NavLink } from "react-router-dom";
const setActive = ({ isActive }) => (isActive ? "active-link " : "not-Active");

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="logo">
          STAFF
        </NavLink>
        <ul className="menu">
          <li className="item">
            <NavLink to="/" className={setActive}>
              {" "}
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/jobs" className={setActive}>
              Jobs
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/companies" className={setActive}>
              Companies
            </NavLink>
          </li>{" "}
          <li className="item">
            <NavLink to="/companiesRegister" className={setActive}>
              Companies Register
            </NavLink>
            <NavLink to="/Register" className={setActive}>
              User Register
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
