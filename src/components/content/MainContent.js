import React from "react";
import JobTitle from "./JobItem";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
import { useLocation } from "react-router";
import { jobsData } from "../../constants/jobsdata";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const MainContent = () => {
  const location = useLocation().pathname;

  return (
    <div className={styles.mainContent}>
      {" "}
      <div className={styles.contentHotJobs}>HOT JOBS CAROUSEL</div>
      <div className={styles.contentNavbar}>
        {location === "/jobs" ? (
          <Navbar />
        ) : (
          <p className={styles.companiesNavbarSuccessor}>
            1 - 50 company results from 4360 total companies on staff.am
          </p>
        )}
      </div>
      <div className={styles.jobsColections}>
        {jobsData.map((job) => {
          return <JobTitle {...job} key={uuid()} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
