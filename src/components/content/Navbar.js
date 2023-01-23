import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import Button from "../../UI/Button";

import { useDispatch, useSelector } from "react-redux";
import remote from "../../images/remote_job.png";
import crown from "../../images/crown.svg";
import styles from "./contents.module.scss";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { v4 as uuid } from "uuid";
import { LEVEL_CATEGORY } from "../../constants/category";
import { deleteFilter, setFilter } from "../../store/slices/filterSlice";

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
  const customButtonStyle = {
    position: "relative",
    textTransform: "none",
    minHeight: "40px",
    font: " 12px normal Roboto, sans-serif",
    "&:hover": {
      transition: "all 0.3s linear",
      transform: " scale(1.05)",
    },
  };

  const customIconStyle = {
    width: "14px",
    right: "0",
    top: "-4px",
    position: "absolute",
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
        {LEVEL_CATEGORY.data.map((level, i) => {
          const isClicked = specialistLevel.find((item) => item === level);

          return (
            <Button
              color={`student` + i}
              variant={isClicked ? "outlined" : "contained"}
              size="small"
              customStyles={{ ...customButtonStyle }}
              key={uuid()}
              onClick={() => onClickButton(level)}
            >
              {[
                level,
                isClicked ? (
                  <HighlightOffOutlinedIcon sx={{ ...customIconStyle }} />
                ) : null,
              ]}
            </Button>
          );
        })}{" "}
      </div>
    </>
  );
};

export default Navbar;
