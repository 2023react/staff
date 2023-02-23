import React, { useCallback, useEffect, useState } from "react";

import JobItem from "./JobItem";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
import { useLocation } from "react-router";
import { v4 as uuid } from "uuid";

import {
  useGetFiltredCompaniesQuery,
  useGetFiltredINQuery,
} from "../../store/slices/dataControlRTKQ";

import { where } from "firebase/firestore";
import { useSelector } from "react-redux";

import Selectlimit from "../../UI/Selectlimit";

import LinearColor from "../../UI/Progress";

import CompanyItem from "../company/companyItem/CompanyItem";
import { SwiperComponent } from "../swiper/Swiper";

import { PATHNAME } from "../../constants/pathname";

const MainContent = () => {
  const { jobs } = PATHNAME;
  const [limit, setLimit] = useState();
  const location = useLocation().pathname;

  const handleChange = (e) => {
    setLimit(e.target.value);
  };
  const [jobsData, setJobsData] = useState([]);

  const levelCategory = useSelector((state) => state.filterSlice.levelCategory);
  const jobCategory = useSelector((state) => state.filterSlice.jobCategory);
  const industry = useSelector(
    (state) => state.filterSlice.industryCategoryCompany
  );

  const filterHints = jobCategory.length
    ? [where("category", "in", jobCategory)]
    : levelCategory.length
    ? [where("level", "in", levelCategory)]
    : [];

  const filterHintsCompany = industry.length
    ? [where("industry", "in", industry)]
    : [];

  const { data, isLoading } = useGetFiltredINQuery({
    limits: limit,
    filterHints,
  });

  const { data: comData, isLoading: loading } = useGetFiltredCompaniesQuery({
    filterHintsCompany,
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

  const getData = () => {
    if (location !== "/companies") {
      return jobsData?.map((job) => (
        <JobItem item={job?.item} id={job?.id} key={uuid()} />
      ));
    }
    return comData?.map((c) => (
      <CompanyItem item={c?.item} id={c?.id} key={uuid()} />
    ));
  };

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
