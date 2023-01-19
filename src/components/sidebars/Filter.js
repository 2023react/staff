import React from "react";
import Checkbox from "./filter/Checkbox";
import Clear from "./filter/Clear";
import Title from "./filter/Title";
import styles from "./sidebars.module.scss";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router";
import {
  CITIES,
  ACTIVITY_TYPE_LEVELS,
  JOB_CATEGORY_LEVELS,
  INDUSTRIES_LEVELS,
  SPECIALIST_LEVELS,
} from "../constants/options";

const Filter = () => {
  const location = useLocation().pathname;
  const data = useSelector((state) => state);
  console.log(data);
  let filterCategories = [SPECIALIST_LEVELS, JOB_CATEGORY_LEVELS, CITIES];

  return (
    <div className={styles.filterSidebar}>
      <Clear />

      <div className={styles.filterCategories}>
        {filterCategories.map((categoryType) => {
          return (
            <Title filterTitle={categoryType.title.trim()} key={uuid()}>
              {categoryType.levels.map((level) => {
                return (
                  <Checkbox
                    category={categoryType.categories}
                    value={level.trim()}
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
