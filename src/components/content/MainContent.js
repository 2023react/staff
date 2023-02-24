import React, { useState } from "react";

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

import { useDispatch, useSelector } from "react-redux";
import Selectlimit from "../../UI/Selectlimit";
import LinearColor from "../../UI/Progress";

import CompanyItem from "../company/companyItem/CompanyItem";
import { SwiperComponent } from "../swiper/Swiper";

const MainContent = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState();

  // const handleChange = (e) => {
  //   setLimit(e.target.value);
  // };

  const location = useLocation().pathname;

  const levelCategory = useSelector((state) => state.filterSlice.levelCategory);
  const jobCategory = useSelector((state) => state.filterSlice.jobCategory);
  const industry = useSelector(
    (state) => state.filterSlice.industryCategoryCompany
  );

  const getFilteredJobs = () => {
    const levelsType = levelCategory.map((item) => where("level", "==", item));
    const jobsType = jobCategory.map((item) => where("category", "==", item));
    console.log(levelsType, "levels");
    return [...jobsType, ...levelsType];
  };

  const getFilteredCompanies = () => {
    const industryType = industry.map((item) => where("industry", "==", item));

    return [...industryType];
  };

  const { data, isLoading } = useGetFiltredINQuery({
    limits: limit,
    filterHints: getFilteredJobs(),
  });

  const { data: comData, isLoading: loading } = useGetFiltredCompaniesQuery({
    filterHintsCompany: getFilteredCompanies(),
  });

  const getData = () => {
    if (location !== "/companies") {
      return data.map((job) => (
        <JobItem item={job?.item} id={job?.id} key={uuid()} />
      ));
    }
    return comData.map((c) => (
      <CompanyItem item={c?.item} id={c?.id} key={uuid()} />
    ));
  };

  // import { SwiperComponent } from "../swiper/Swiper";
  // import { PATHNAME } from "../../constants/pathname";
  // const MainContent = () => {
  //   const { jobs } = PATHNAME;
  //   const [limit, setLimit] = useState();
  //   const [jobsData, setJobsData] = useState([]);
  //   const location = useLocation().pathname;
  //   const dispatch = useDispatch();
  //   const levelCategory = useSelector((state) => state.filterSlice.levelCategory);
  //   const jobCategory = useSelector((state) => state.filterSlice.jobCategory);
  //   const handleChange = (e) => {
  //     setLimit(e.target.value);
  //   };
  //   const filterHints = jobCategory.length
  //     ? [where("jobCategory", "in", jobCategory)]
  //     : levelCategory.length
  //     ? [where("level", "in", levelCategory)]
  //     : [];

  //   const { data, isLoading } = useGetFiltredINQuery({
  //     limits: limit,
  //     filterHints,
  //   });
  //   useEffect(() => {
  //     let filtredJobs = data;

  //     if (jobCategory.length && levelCategory.length) {
  //       filtredJobs = data.filter((value) =>
  //         levelCategory.includes(value.item.level)
  //       );
  //     }
  //     if (filtredJobs === jobsData) {
  //       return;
  //     }
  //     setJobsData(filtredJobs);
  //   }, [data, jobCategory, levelCategory, jobsData]);
  //   const [addJob, { isSuccess }] = useAddJobsMutation();
  //   const [deleteJob, { isError }] = useDeleteJobsMutation();
  //   const handleAddJob = async (job) => {
  //     addJob({ job }).unwrap();
  //   };

  //   const handleDeleteJob = async (job) => {
  //     deleteJob("f2604580-8c76-497e-a6e1-15a34a3c9b5c").unwrap();
  //   };
  //   dispatch(addJobsData(data));

  return (
    <div className={styles.mainContent}>
      <div className={styles.contentHotJobs}>
        <SwiperComponent />
      </div>
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
        {isLoading || loading ? <LinearColor /> : getData()}

        {/* // {isLoading ? ( */}
        {/* //   <LinearColor />
        // ) : (
        //   jobsData?.map((job) => {
        //     return <JobItem item={job?.item} id={job?.id} key={uuid()} />;
        //   })
        // )} */}
      </div>
    </div>
  );
};

export default MainContent;
