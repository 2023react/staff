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
          <div className="dropdown">
            <a className="dropbtn">
              For Companies
              <span className="caret"></span>
            </a>

            <div className="dropdown-content">
              <nav>
                <div className="arrow-up arrow-on"></div>
                <div className="arrow-up arrow-under"></div>
                <NavLink>Sign In</NavLink>
              </nav>
              <nav>
                <NavLink>Register</NavLink>
              </nav>
            </div>
          </div>
          <div className="dropdown">
            <a className="dropbtn">
              For Job-Seekers
              <span className="caret"></span>
            </a>

            <div className="dropdown-content">
              <nav>
                <div className="arrow-up arrow-on"></div>
                <div className="arrow-up arrow-under"></div>
                <NavLink>Sign In</NavLink>
              </nav>
              <nav>
                <NavLink>Register</NavLink>
              </nav>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
