import React from "react";
import styles from "./sidebars.module.scss";
import Ads from "./Ads";
import Filter from "./Filter";
import Search from "./Search";
import { useLocation } from "react-router";

const MainSidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <Search />
      <Ads />
      <Filter />
      <Ads href="https://staff.am/staffmedia/mobile/" />
    </div>
  );
};

export default MainSidebar;
