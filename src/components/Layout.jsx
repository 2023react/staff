import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
export const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
