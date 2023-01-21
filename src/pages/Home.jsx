import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { margin } from "@mui/system";
import Slider from "../components/Carousel";
import styles from "./Home.module.scss";
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
                  <input type="radio" />
                </div>
                JOBS
              </label>

              <label className={styles.label}>
                <div className={styles.iratio}>
                  <input type="radio" />
                </div>
                TRAININGS
              </label>
              <label className={styles.label}>
                <div className={styles.iratio}>
                  <input type="radio" />
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
                      <option value="1">Soaftware developer</option>
                      <option value="2">Sales Management</option>
                      <option value="3">Adminidtrative</option>
                      <option value="4">Accounting</option>
                    </select>
                  </div>
                </div>
                <div className={styles.fields}>
                  <div className={styles.city}>
                    <select>
                      <option value=" ">All Cities</option>

                      <option value="2">Online</option>
                      <option value="3">Yerevan</option>
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
