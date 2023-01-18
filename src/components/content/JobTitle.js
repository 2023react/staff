import React from "react";
import styles from "./contents.module.scss";
import verified from "../../images/verifed.png";
const JobTitle = () => {
  return (
    <div className={styles.jobInfo}>
      <img
        src="https://galaxygroup.am/wp-content/uploads/2019/05/Ucom.png"
        alt=""
      />
      <div className={styles.jobInfoTitle}>
        <h4>Administrator</h4>

        <span>
          Company name
          <img src={verified} />
        </span>
      </div>
      <div className={styles.jobInfoDate}>
        <h4>
          <i> icon</i>17 feb 2021
        </h4>
        <span>Yerevan</span>
      </div>

      <div className={styles.jobInfoButton}>
        <button type="button" class="btn btn-outline-primary">
          Primary
        </button>
        <button type="button" class="btn btn-outline-secondary">
          Secondary
        </button>
      </div>
    </div>
  );
};

export default JobTitle;
