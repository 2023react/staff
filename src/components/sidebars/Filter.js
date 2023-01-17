import React from "react";
import Checkbox from "./filter/Checkbox";
import Clear from "./filter/Clear";
import Title from "./filter/Title";
import styles from "./sidebars.module.scss";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { onChange, onAdd, onClick } from "../../store/slices/filterSlice";
const Filter = () => {
  const test = useSelector((state) => state.staffdata.jobs);
  console.log(test);
  return (
    <div className={styles.filterSidebar}>
      <Clear />

      <div className={styles.filterCategories}>
        {test.map((job) => {
          return (
            <Title filterTitle={job.title.trim()} key={uuid()}>
              {job.categories.map((type) => {
                return (
                  <Checkbox
                    name={type.title.trim()}
                    countJobs="9"
                    key={uuid()}
                  />
                );
              })}{" "}
            </Title>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
