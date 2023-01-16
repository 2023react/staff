import React from "react";
import styles from "./sidebars.module.scss";
import Ads from "./Ads";
import Filter from "./Filter";
import Search from "./Search";

const MainSidebar = () => {
  return (
    <div className={styles.mainSidebar}>
      <form>
        <Search />
        <Ads />
        <Filter />
      </form>
    </div>
  );
};

export default MainSidebar;
