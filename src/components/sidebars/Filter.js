import React from "react";
import Checkbox from "./filter/Checkbox";
import Clear from "./filter/Clear";
import Title from "./filter/Title";
import styles from "./sidebars.module.scss";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { onChange, onAdd, onClick } from "../../store/slices/filterSlice";
import { useLocation } from "react-router";
import { PhotoSizeSelectActualRounded } from "@mui/icons-material";
const Filter = () => {
  const location = useLocation().pathname;

  const filterCategory = useSelector((state) => state.staffdata);
  let levels = [];
  if (location === "/companies") {
    levels = filterCategory.companies;
  } else {
    levels = filterCategory.specialistLevel;
  }
  const onClick1 = () => {
    console.log("onClick1");
  };
  const onClick2 = () => {
    console.log("onClick2");
  };
  return (
    <div className={styles.filterSidebar}>
      <Clear />

      <div className={styles.filterCategories}>
        {levels.map((level) => {
          let onClick;
          if (level.title === "Filter by specialist level") {
            onClick = onClick1;
          } else {
            onClick = onClick2;
          }

          return (
            <Title filterTitle={level.title.trim()} key={uuid()}>
              {level.categories.map((type) => {
                return (
                  <Checkbox
                    onClick={onClick}
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
