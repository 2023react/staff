import React, { useCallback, useEffect, useState } from "react";

import JobItem from "./JobItem";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
import { useLocation } from "react-router";
import { v4 as uuid } from "uuid";
import { useGetFiltredINQuery } from "../../store/slices/dataControlRTKQ";
import { where } from "firebase/firestore";
import { useSelector } from "react-redux";

import Selectlimit from "../../UI/Selectlimit";
import LinearColor from "../../UI/Progress";
import { SwiperComponent } from "../swiper/Swiper";
import { PATHNAME } from "../../constants/pathname";
const MainContent = () => {
  const { jobs } = PATHNAME;
  const [limit, setLimit] = useState();
  const location = useLocation().pathname;

  const levelCategory = useSelector((state) => state.filterSlice.levelCategory);
  const jobCategory = useSelector((state) => state.filterSlice.jobCategory);
  const handleChange = (e) => {
    setLimit(e.target.value);
  };
  const [jobsData, setJobsData] = useState([]);

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
    try {
      if (jobCategory.length && levelCategory.length && data) {
        filtredJobs = data.filter((value) =>
          levelCategory.includes(value.item.level)
        );
      }
      setJobsData(filtredJobs);
    } catch (e) {
      console.log(e);
    }
  }, [data, jobCategory, levelCategory]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.contentHotJobs}>
        <SwiperComponent />
      </div>
      <div className={styles.contentNavbar}>
        {" "}
        <div className={styles.selectLimit}>
          {" "}
          <Selectlimit limit={limit} handleChange={handleChange} />
        </div>
        {location === jobs ? (
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
