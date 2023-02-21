import React, { useState } from "react";

import JobItem from "./JobItem";
import Navbar from "./Navbar";
import styles from "./contents.module.scss";
import { useLocation } from "react-router";
import { v4 as uuid } from "uuid";
import {
  useGetFiltredCompaniesQuery,
  useGetFiltredDataQuery,
} from "../../store/slices/dataControlRTKQ";
import { where } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { addJobsData } from "../../store/slices/jobsSlice";
import Selectlimit from "../../UI/Selectlimit";
import LinearColor from "../../UI/Progress";
import CompanyItem from "../company/companyItem/CompanyItem";

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

  // const getData = useCallback(async () => {
  //     const ref = collection(db, "jobs");
  //     const levelsType = levelCategory.map((item) =>
  //       where("requiredCandidateLevel", "==", item)
  //     );
  //     const jobsType = jobCategory.map((item) =>
  //       where("jobCategory", "==", item)
  //     );
  //     const q1 = query(ref, ...levelsType, ...jobsType);
  //     const fetchData = await getDocs(q1);
  //     const data = [];
  //     fetchData.forEach((doc) => {
  //       data.push({ item: doc.data(), id: doc.id });
  //     });
  //     dispatch(addJobsData(data));
  //   }, [dispatch, jobCategory, levelCategory]);
  //   useEffect(() => {
  //     getData();
  //   }, [getData]);
  //   const jobData = useSelector((state) => state.jobsSlice?.jobsData);

  const { data, isLoading } = useGetFiltredDataQuery({
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

  console.log(data);

  return (
    <div className={styles.mainContent}>
      <div className={styles.contentHotJobs}>Hot job</div>
      <div className={styles.contentNavbar}>
        {/* <div className={styles.selectLimit}>
          
          <Selectlimit limit={limit} handleChange={handleChange} />
        </div> */}
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
      </div>
    </div>
  );
};

export default MainContent;
