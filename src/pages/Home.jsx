import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { margin } from "@mui/system";
import Slider from "../components/Carousel";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { JOB__CATEGORY, CITIES } from "../components/constants/category";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.search_section}>
        <div className={styles.text}>
          <h1 className={styles.text_h1}>CAREER SEARCH STARTS HERE</h1>
          <p className={styles.text_p}>
            Search for jobs, find your match and apply with one click.
          </p>
          <p className={styles.text_p}>Explore all our options now.</p>
        </div>
        <form className={styles.form}>
          <div className={styles.search_clearfix}>
            <div className={styles.jobfilter}>
              <label className={styles.label}>
                <div className={styles.iratio}>
                  <input type="radio" name="job" />
                </div>
                JOBS
              </label>

              <label className={styles.label}>
                <div className={styles.iratio}>
                  <input type="radio" name="job" />
                </div>
                COMPANIES
              </label>
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
                <div>
                  <Button className={styles.searchbtn} variant="contained">
                    <SearchIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div>
          <Slider />
        </div>
        <h2 className={styles.hotjobs}>HOT JOBS</h2>
      </div>
    </div>
  );
};

export default Home;
