import React, { useState } from "react";

import JobItem from "./JobItem";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
import { useLocation } from "react-router";
import { jobsData } from "../../constants/jobsdata";
import { v4 as uuid } from "uuid";
import {
  useAddJobsMutation,
  useDeleteJobsMutation,
  useGetFiltredDataQuery,
} from "../../store/slices/dataControlRTKQ";
import { where } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { addJobsData } from "../../store/slices/jobsSlice";
import Selectlimit from "../../UI/Selectlimit";
import LinearColor from "../../UI/Progress";
import { SwiperComponent } from "../swiper/Swiper";

const MainContent = () => {
  const [limit, setLimit] = useState();
  const handleChange = (e) => {
    setLimit(e.target.value);
  };

  const location = useLocation().pathname;

  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.jobsSlice.jobsData);
  const levelCategory = useSelector((state) => state.filterSlice.levelCategory);
  const jobCategory = useSelector((state) => state.filterSlice.jobCategory);

  const levelsType = levelCategory.map((item) =>
    where("requiredCandidateLevel", "==", item)
  );
  const jobsType = jobCategory.map((item) => where("jobCategory", "==", item));

  const filterHints = [...jobsType, ...levelsType];
  const { data, isLoading } = useGetFiltredDataQuery({
    limits: limit,
    filterHints,
  });
  const [addJob, { isSuccess }] = useAddJobsMutation();
  const [deleteJob, { isError }] = useDeleteJobsMutation();

  const handleAddJob = async (job) => {
    console.log(job);
    addJob({ job }).unwrap();
  };
  const handleDeleteJob = async (job) => {
    deleteJob("f2604580-8c76-497e-a6e1-15a34a3c9b5c").unwrap();
  };
  dispatch(addJobsData(data));

  return (
    <div className={styles.mainContent}>
      <div className={styles.contentHotJobs}>
        <SwiperComponent jobData={jobData} />
      </div>
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
          jobData.map((job) => {
            return <JobItem {...job} key={uuid()} />;
          })
        )}
      </div>
    </div>
  );
};

export default MainContent;
