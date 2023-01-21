import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import style from "../header/header.module.scss";

import { openLogin, openRegister } from "../../store/slices/loginSlice";

const setActive = ({ isActive }) => (isActive ? "active-link " : "not-Active");

const Header = () => {
  const dispatch = useDispatch();

  const onClickLoginUser = () => dispatch(openLogin());
  const onClickLoginRegiter = () => dispatch(openRegister());

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__block}>
          <NavLink to="/" className={style.logo}>
            STAFF
          </NavLink>
          <ul className={style.menu}>
            <NavLink to="/" className={setActive}>
              <li className={style.item}>Home</li>
            </NavLink>
            <NavLink to="/jobs" className={setActive}>
              <li className={style.item}>Jobs</li>
            </NavLink>
            <NavLink to="/companies" className={setActive}>
              <li className={style.item}>Companies</li>
            </NavLink>
          </ul>
          {/* ------------------ */}

          <div className={`${style.dropdown}`}>
            <div className={style.dropdown__text}>For Companies</div>
            <div className={style.dropdown__content}>
              <div className={style.arrow_up}></div>
              <div className={style.block__down}>
                <div className={style.dropdown__button}>
                  <button className={style.btn}>Sign In</button>
                </div>

                <div className={style.dropdown__button}>
                  <Link to="/company/register">
                    <button className={style.btn}> Register</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={`${style.dropdown}`}>
            <div className={style.dropdown__text}>For job-seekers</div>
            <div className={style.dropdown__content}>
              <div className={style.arrow_up}></div>
              <div className={style.block__down}>
                <div className={style.dropdown__button}>
                  <button onClick={onClickLoginUser} className={style.btn}>
                    Sign In
                  </button>
                </div>

                <div className={style.dropdown__button}>
                  <button onClick={onClickLoginRegiter} className={style.btn}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
