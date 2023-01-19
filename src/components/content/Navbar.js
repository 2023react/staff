import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import Button from "../../UI/Button";

import { useDispatch, useSelector } from "react-redux";
import remote from "../../images/remote_job.png";
import crown from "../../images/crown.svg";
import styles from "./contents.module.scss";

import { v4 as uuid } from "uuid";

import { LEVEL_CATEGORY } from "../constants/category";
import { deleteFilter, setFilter } from "../../store/slices/filterSlice";
import { theme } from "../constants/styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const specialistLevel = useSelector(
    (state) => state.filterSlice.levelCategory
  );

  const onClickButton = (level) => {
    specialistLevel.find((item) => item === level)
      ? dispatch(
          deleteFilter({ value: level, category: LEVEL_CATEGORY.categoryType })
        )
      : dispatch(
          setFilter({ value: level, category: LEVEL_CATEGORY.categoryType })
        );
  };

  return (
    <>
      <div className={styles.navbarCheckboxes}>
        <label className={styles.navbarCheckbox}>
          <img src={remote} alt="" />
          <span>Remote Jobs </span>
          <input type="checkbox" />
        </label>
        <label className={styles.navbarCheckbox}>
          <img src={crown} alt="" />
          <span>Featured jobs</span>
          <input type="checkbox" />
        </label>
      </div>

      <div className={styles.navbarButtons}>
        <ThemeProvider theme={theme}>
          {LEVEL_CATEGORY.data.map((level, i) => {
            return (
              <Button
                color={`student` + i}
                variant={
                  specialistLevel.find((item) => item === level)
                    ? "outlined"
                    : "contained"
                }
                size="small"
                className={styles.button}
                key={uuid()}
                onClick={() => onClickButton(level)}
              >
                {level}
              </Button>
            );
          })}{" "}
        </ThemeProvider>
      </div>
    </>
  );
};

export default Navbar;
