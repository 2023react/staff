import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsClickedLevel } from "../../store/slices/filterSlice";
import remote from "../../images/remote_job.png";
import crown from "../../images/crown.svg";
import styles from "./contents.module.scss";
import Button from "../../UI/Button";
import { v4 as uuid } from "uuid";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    student: {
      light: "#757ce8",
      main: "#ff7f50",
      dark: "#ff7f50",
      contrastText: "#fff",
    },
    junior: {
      light: "#ff7961",
      main: "#9c27b0",
      dark: "#9c27b0",
      contrastText: "#000",
    },
    mid_level: {
      light: "#757ce8",
      main: "#673ab7",
      dark: "#673ab7",
      contrastText: "#fff",
    },
    senior: {
      light: "#757ce8",
      main: "#00bcd4",
      dark: "#00bcd4",
      contrastText: "#fff",
    },
    c_level: {
      light: "#757ce8",
      main: "#009688",
      dark: "#009688",
      contrastText: "#fff",
    },
    not_defined: {
      light: "#757ce8",
      main: "#07689f",
      dark: "#07689f",
      contrastText: "#fff",
    },
  },
});

const Navbar = () => {
  const dispatch = useDispatch();
  const specialistLevel = useSelector(
    (state) => state.staffdata.specialistLevel[0].categories
  );
  const onClickButton = (target) => {
    dispatch(toggleIsClickedLevel({ level: target.name }));
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
          {specialistLevel.map((level) => {
            return (
              <Button
                name={level.title}
                color={level.config.color}
                variant={level.config.isClicked ? "outlined" : "contained"}
                size="small"
                className={styles.button}
                key={uuid()}
                onClick={(e) => onClickButton(e.target)}
              >
                {level.title}
              </Button>
            );
          })}{" "}
        </ThemeProvider>
      </div>
    </>
  );
};

export default Navbar;