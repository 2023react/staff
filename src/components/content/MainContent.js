import React from "react";
import JobTitle from "./JobTitle";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
const MainContent = () => {
  return (
    <div className="mainContent">
      <div>hot jobs</div>
      <div>
        <Navbar />
      </div>

      <div className={styles.jobsColections}>
        <JobTitle />
      </div>
    </div>
  );
};

export default MainContent;
