import React from "react";
import JobTitle from "./JobTitle";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
import { useLocation } from "react-router";

const MainContent = () => {
  const location = useLocation().pathname;

  return (
    <div className={styles.mainContent}>
      <div>HOT JOBS CAROUSEL</div>

      <div>
        {location === "/jobs" ? (
          <Navbar />
        ) : (
          <p className={"styles."}>
            1 - 50 company results from 436 total companies on staff.am
          </p>
        )}
      </div>

      <div className={styles.jobsColections}>
        <JobTitle />
      </div>
    </div>
  );
};

export default MainContent;
