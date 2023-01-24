<<<<<<< HEAD
import React, { useCallback } from "react";
import JobTitle from "./JobItem";

=======
import React from "react";
>>>>>>> 2ed254b7655d23bd095cf88f6bd91bda85354c00
import { useEffect } from "react";
import JobItem from "./JobItem";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
import { useLocation } from "react-router";
import { jobsData } from "../../constants/jobsdata";
import { v4 as uuid } from "uuid";
<<<<<<< HEAD

import {
  collection,
  getDocs,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
=======
import { collection, getDocs, query, where } from "firebase/firestore";
>>>>>>> 2ed254b7655d23bd095cf88f6bd91bda85354c00
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addJobsData } from "../../store/slices/jobsSlice";

const MainContent = () => {
  const location = useLocation().pathname;

  const dispatch = useDispatch();

  const levelCategory = useSelector((state) => state.filterSlice.levelCategory);
  const jobCategory = useSelector((state) => state.filterSlice.jobCategory);
  const searchValue = useSelector((state) => state.filterSlice.searchJobs);

  const getData = useCallback(async () => {
    const ref = collection(db, "jobs");

    const levelsType = levelCategory.map((item) =>
      where("requiredCandidateLevel", "==", item)
    );
    const jobsType = jobCategory.map((item) =>
      where("jobCategory", "==", item)
    );
    const searchType = searchValue.map((item) =>
      where("jobName", "array-contains-any", [item])
    );

    const q1 = query(ref, ...levelsType, ...jobsType, ...searchType);
    const fetchData = await getDocs(q1);

    const data = [];
    fetchData.forEach((doc) => {
      data.push(doc.data());
    });
    console.log(data);
    dispatch(addJobsData(data));
  }, [dispatch, jobCategory, levelCategory, searchValue]);

  useEffect(() => {
    getData();
  }, [getData]);

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
          return <JobItem {...job} key={uuid()} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
