import React from "react";
import styles from "./contents.module.scss";
import verified from "../../images/verifed.png";
import BasicButtons from "../../UI/Button";
import { Link } from "react-router-dom";
const JobTitle = ({ photoUrl, jobName, companyName, location, ...props }) => {
  return (
    <div className={styles.jobInfo}>
      <img src={photoUrl} alt="" />
      <div className={styles.jobInfoTitle}>
        <h4> {jobName}</h4>

        <span>
          {companyName}
          <img src={verified} />
        </span>
      </div>
      <div className={styles.jobInfoDate}>
        <h4>
          <i> icon</i>17 feb 2021
        </h4>
        <span>{location}</span>
      </div>

      <div className={styles.jobInfoButton}>
        <BasicButtons size="small" variant="outlined">
          View more
        </BasicButtons>
        <BasicButtons size="small" variant="outlined">
          Follow
        </BasicButtons>
      </div>
    </div>
  );
};

export default JobTitle;
