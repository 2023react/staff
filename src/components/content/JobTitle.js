import React from "react";
import styles from "./contents.module.scss";
const JobTitle = () => {
  return (
    <div className={styles.jobInfo}>
      <img
        src="https://galaxygroup.am/wp-content/uploads/2019/05/Ucom.png"
        alt=""
      />
      <div>
        <h4>administratr</h4>
        <span>company name</span>
      </div>
      <div>
        <h4>17 feb 2021</h4>
        <span>yerevan</span>
      </div>
      <button type="button" class="btn btn-outline-primary">
        Primary
      </button>
      <button type="button" class="btn btn-outline-secondary">
        Secondary
      </button>
    </div>
  );
};

export default JobTitle;
