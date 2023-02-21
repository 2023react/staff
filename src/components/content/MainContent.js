import React, { useCallback, useEffect, useState } from "react";

import JobItem from "./JobItem";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
import { useLocation } from "react-router";
import { v4 as uuid } from "uuid";
import {
  useAddJobsMutation,
  useDeleteJobsMutation,
  useGetFiltredINQuery,
} from "../../store/slices/dataControlRTKQ";
import { where } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { addJobsData } from "../../store/slices/jobsSlice";
import Selectlimit from "../../UI/Selectlimit";
import LinearColor from "../../UI/Progress";

const MainContent = () => {
  const [limit, setLimit] = useState();
  const [jobsData, setJobsData] = useState([]);
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const levelCategory = useSelector((state) => state.filterSlice.levelCategory);
  const jobCategory = useSelector((state) => state.filterSlice.jobCategory);
  const handleChange = (e) => {
    setLimit(e.target.value);
  };
  const filterHints = jobCategory.length
    ? [where("jobCategory", "in", jobCategory)]
    : levelCategory.length
    ? [where("level", "in", levelCategory)]
    : [];

  const { data, isLoading } = useGetFiltredINQuery({
    limits: limit,
    filterHints,
  });
  useEffect(() => {
    let filtredJobs = data;

    if (jobCategory.length && levelCategory.length) {
      filtredJobs = data.filter((value) =>
        levelCategory.includes(value.item.level)
      );
    }
    if (filtredJobs === jobsData) {
      return;
    }
    setJobsData(filtredJobs);
  }, [data, jobCategory, levelCategory, jobsData]);
  const [addJob, { isSuccess }] = useAddJobsMutation();
  const [deleteJob, { isError }] = useDeleteJobsMutation();
  const handleAddJob = async (job) => {
    addJob({ job }).unwrap();
  };

  const handleDeleteJob = async (job) => {
    deleteJob("f2604580-8c76-497e-a6e1-15a34a3c9b5c").unwrap();
  };
  dispatch(addJobsData(data));
  return (
    <div className={styles.mainContent}>
      <div className={styles.contentHotJobs}>Hot job</div>
      <div className={styles.contentNavbar}>
        {" "}
        <div className={styles.selectLimit}>
          {" "}
          <Selectlimit limit={limit} handleChange={handleChange} />
        </div>
        {location === "/jobs" ? (
          <Navbar />
        ) : (
          <p className={styles.companiesNavbarSuccessor}>
            1 - 50 company results from 4360 total companies on staff.am
          </p>
        )}
      </div>

      <div className={styles.jobsColections}>
        {isLoading ? (
          <LinearColor />
        ) : (
          jobsData?.map((job) => {
            return <JobItem item={job?.item} id={job?.id} key={uuid()} />;
          })
        )}
      </div>
    </div>
  );
};

export default MainContent;
