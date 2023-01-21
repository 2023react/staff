import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Modal from "./login/loginModal/Modal";
export const Layout = () => {
  const showLogin = useSelector((state) => state.loginSlice.showLogin);
  const showRegister = useSelector((state) => state.loginSlice.showRegister);
  const showLoginCompany = useSelector(
    (state) => state.loginSlice.showComponyLogin
  );

  return (
    <>
      <Header />

      {(showLogin || showRegister || showLoginCompany) && <Modal />}
      <Outlet />
    </>
  );
};
