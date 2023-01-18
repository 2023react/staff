import React from "react";
import styles from "../sidebars.module.scss";
const Checkbox = ({ countJobs, name, ...props }) => {
  return (
    <div className={styles.jobCandidateType} {...props}>
      {" "}
      <label className={styles.checkboxLabel}>
        {" "}
        <input type="checkbox" />
        {name}
        <span> ({countJobs})</span>
      </label>
    </div>
  );
};

export default Checkbox;
