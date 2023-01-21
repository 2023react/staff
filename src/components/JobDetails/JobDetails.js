import React from "react";
import JobDetailsContent from "./JobDetailsContent";
import styles from "./Jobdetails.module.scss";
import { jobsData } from "../constants/jobsdata";
const jobData = jobsData[3];
const JobDetails = () => {
  return (
    <div className="jobs">
      <div className="container">
        <div className={styles.search}>
          <div className={styles.header_info}>
            <img src="/img/jobtitle.png" />
            <div className={styles.contailner_relative}>
              <div className={styles.image}>
                <img src={jobData.photoUrl} />
              </div>
            </div>

            <div className={styles.company}>
              <div className={styles.company_info}>
                <div className={styles.company_title}>
                  <h1>{jobData.companyName}</h1>
                </div>
                {/* <div className={styles.company_title_txt}>
                  <p>Industry: Information technologies</p>
                </div>
                <div className={styles.xxx}>
                  <p>23 active jobs</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="sidebar"></div>
        <JobDetailsContent />
      </div>
    </div>
  );
};

export default JobDetails;
