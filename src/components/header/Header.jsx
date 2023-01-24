import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink, useLocation } from "react-router-dom";
import style from "../header/header.module.scss";
import logo from "../../images/logo.png";
import homeLogo from "../../images/homeLogo.png";

import {
  openComponyLogin,
  openLogin,
  openRegister,
} from "../../store/slices/loginSlice";

import Logo from "../company/Logo";
import clsx from "clsx";

const Header = () => {
  const dispatch = useDispatch();

  // const currentCompany = useSelector(
  //   (state) => state.loginSlice.currentCompany
  // );
  const pathname = useLocation().pathname;
  const isHomePage = pathname === "/";

  const onClickLoginUser = () => dispatch(openLogin());
  const onClickLoginRegiter = () => dispatch(openRegister());
  const openLoginCompany = () => dispatch(openComponyLogin());
  const currentUser = useSelector((state) => state.loginSlice.currentUser);

  return (
    <header
      className={`${style.header} ${[isHomePage ? "" : style.whiteHeader]}`}
    >
      <div className={style.mainNavbar}>
        <div className="container">
          <div className={style.header__block}>
            <NavLink to="/">
              <div className={style.logo}>
                <img
                  style={{ width: "130px" }}
                  src={isHomePage ? homeLogo : logo}
                  alt="logo"
                />
              </div>
            </NavLink>
            <div className={style.mainMenu}>
              <ul className={style.menu}>
                <NavLink
                  to="/jobs"
                  className={clsx({
                    activeLink: pathname === "/jobs",
                    notActive: pathname !== "/jobs" && !isHomePage,
                  })}
                >
                  {" "}
                  <li className={style.item}>Jobs</li>
                </NavLink>
                <NavLink
                  to="/companies"
                  className={clsx({
                    activeLink: pathname === "/companies",
                    notActive: pathname !== "/companies" && !isHomePage,
                  })}
                >
                  {" "}
                  <li className={style.item}> Companies</li>{" "}
                </NavLink>
                {currentUser ? (
                  <NavLink
                    to={`/company/${currentUser.displayName}`}
                    className={style.logOutoBox}
                  >
                    {" "}
                    <li>
                      {" "}
                      <Logo
                        currentCompany={currentUser}
                        checkHome={isHomePage}
                      />
                    </li>{" "}
                  </NavLink>
                ) : (
                  <li>
                    <div className={style.dropdown}>
                      <div className={style.dropdown__text}>For Companies</div>
                      <div className={style.dropdown__content}>
                        <div className={style.arrow_up}></div>
                        <div className={style.block__down}>
                          <div className={style.dropdown__button}>
                            <button
                              onClick={openLoginCompany}
                              className={style.btn}
                            >
                              Sign In
                            </button>
                          </div>

                          <div className={style.dropdown__button}>
                            <NavLink to="/company/register">
                              <button className={style.btn}> Register</button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {/* <li><div className={`${style.dropdown}`}>
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
            </div>
          </div></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
