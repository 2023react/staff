import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import style from "../header/header.module.scss";

import logo from "../../images/logo.png";
import {
  openComponyLogin,
  openLogin,
  openRegister,
} from "../../store/slices/loginSlice";
import LogedCompany from "../company/logedCompany/LogedCompany";
const setActive = ({ isActive }) => (isActive ? "active-link " : "not-Active");

const Header = () => {
  const dispatch = useDispatch();

  const pathname = useLocation().pathname === "/";

  const onClickLoginUser = () => dispatch(openLogin());
  const onClickLoginRegiter = () => dispatch(openRegister());
  const openLoginCompany = () => dispatch(openComponyLogin());
  const currentUser = useSelector((state) => state.loginSlice.currentUser);
  return (
    <header
      className={
        pathname
          ? `${style.header} ${style.green}`
          : `${style.header} ${style.white}`
      }
    >
      <div className="container">
        <div className={style.header__block}>
          <NavLink to="/" className={style.logo}>
            {pathname ? (
              <img
                style={{ width: "130px" }}
                src="/img/staff.png"
                alt="image"
              />
            ) : (
              <img style={{ width: "130px" }} src={logo} alt="image" />
            )}
          </NavLink>
          <ul className={style.menu}>
            <NavLink to="/jobs" className={style.setActive}>
              <li
                className={
                  pathname
                    ? `${style.item} ${style.whiteColor}`
                    : `${style.item} ${style.greenColor}`
                }
              >
                Jobs
              </li>
            </NavLink>
            <NavLink to="/companies" className={style.setActive}>
              <li
                className={
                  pathname
                    ? `${style.item} ${style.whiteColor}`
                    : `${style.item} ${style.greenColor}`
                }
              >
                Companies
              </li>
            </NavLink>
          </ul>
          {/* ------------------ */}

          {currentUser ? (
            <LogedCompany pathname={pathname} />
          ) : (
            <>
              <div className={`${style.dropdown}`}>
                <div className={style.dropdown__text}>For Companies</div>
                <div className={style.dropdown__content}>
                  <div className={style.arrow_up}></div>
                  <div className={style.block__down}>
                    <div className={style.dropdown__button}>
                      <button onClick={openLoginCompany} className={style.btn}>
                        Sign In
                      </button>
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
                      <button
                        onClick={onClickLoginRegiter}
                        className={style.btn}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
