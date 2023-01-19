import React from "react";
import styles from "../sidebars.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsClickedLevel } from "../../../store/slices/filterSlice";
const Checkbox = ({ countJobs, value, category, ...props }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.jobCandidateType} {...props}>
      {" "}
      <label
        className={styles.checkboxLabel}
        onClick={(e) => {
          console.log(e.target.checked);

          dispatch(toggleIsClickedLevel({ category, value }));
        }}
      >
        {" "}
        <input type="checkbox" value={value} />
        {value} <span> ({countJobs})</span>
      </label>
    </div>
  );
};

export default Checkbox;
