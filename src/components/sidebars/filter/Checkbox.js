import React from "react";
import { useSelector } from "react-redux";
import styles from "../sidebars.module.scss";
 
 
const Checkbox = ({ countJobs, name, onChange, categoryType, ...props }) => {
  const isChecked = useSelector((state) =>
    state.filterSlice[categoryType].find((item) => name === item)
  );

  return (
    <div className={styles.jobCandidateType}>
      <label className={styles.checkboxLabel}>
        <input
          onChange={(e) => onChange(name, e)}
          type="checkbox"
          checked={!!isChecked}
        />
        {name}
        <span> ({countJobs})</span>
 
      </label>
    </div>
  );
};

export default Checkbox;
