import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { margin } from "@mui/system";
import Slider from "../components/Carousel";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import {
  JOB__CATEGORY,
  CITIES,
  COMPANY__INDUSTRIES,
} from "../constants/category";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fields}>
        <div className={styles.keyword}>
          <input type="text" placeholder="All Keywords" />
        </div>
      </div>
      <div className={styles.fields}>
        <div className={styles.categories}>
          <select>
            <option value>All Categories</option>

            {JOB__CATEGORY.data.map((item) => (
              <option value={item} key={uuid()}>
                {item}
              </option>
            ))}
          </select>
        </div>
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
        <Button className={styles.searchbtn} variant="contained">
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}
export function Wrapper1() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fields}>
        <div className={styles.keyword}>
          <input type="text" placeholder="All Keywords" />
        </div>
      </div>
      <div className={styles.fields}>
        <div className={styles.categories}>
          <select>
            <option value>All Industries</option>

            {COMPANY__INDUSTRIES.data.map((item) => (
              <option value={item} key={uuid()}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.fields}>
        <Button className={styles.searchbtn} variant="contained">
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}
