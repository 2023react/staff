import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { margin } from "@mui/system";
import Slider from "../components/carusel/Carousel";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import {
  JOB__CATEGORY,
  CITIES,
  COMPANY__INDUSTRIES,
} from "../constants/category";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { PATHNAME } from "../constants/pathname";
import {
  deleteFilter,
  emptyFilter,
  setFilter,
} from "../store/slices/filterSlice";

export function WrapperJob() {
  const { jobs } = PATHNAME;
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filterSlice.jobCategory);
  const value = String(category);

  const onClickButton = async (value) => {
    if (category.length > 0) {
      dispatch(emptyFilter({ category: JOB__CATEGORY.categoryType }));
    }

    dispatch(setFilter({ value: value, category: JOB__CATEGORY.categoryType }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.fields}>
        <select value={value} onChange={(e) => onClickButton(e.target.value)}>
          <option value>All Categories</option>

          {JOB__CATEGORY.data.map((item) => (
            <option value={item} key={uuid()}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.fields}>
        <div className={styles.city}>
          <select>
            <option value=" ">All Cities</option>
            {CITIES.data.map((item) => (
              <option value={item} key={uuid()}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.fields}>
        <Link to={jobs}>
          <Button className={styles.searchbtn} variant="contained">
            <SearchIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
}
