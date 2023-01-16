import React from "react";
import AdsImg from "../../images/73fa3d65.png";
import styles from "./sidebars.module.scss";
const Ads = () => {
  return (
    <div className={styles.sidebarAds}>
      <a href="https://staff.am/staffmedia/telegram/" target="_blank">
        <img src={AdsImg} />
      </a>
    </div>
  );
};

export default Ads;
