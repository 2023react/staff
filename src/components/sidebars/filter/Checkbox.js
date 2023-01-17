import React from "react";
import styles from "../sidebars.module.scss";
const Checkbox = ({ countJobs, name }) => {
  return (
    <div className={styles.jobCandidateType}>
      {" "}
      <input type="checkbox" />
      <label className={styles.checkboxLabel}>
        {name}
        <span> ({countJobs})</span>
      </label>
    </div>
  );
};

export default Checkbox;
