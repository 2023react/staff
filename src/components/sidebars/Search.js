import React from "react";
import { useLocation } from "react-router";
import Button from "../../UI/Button";
import SearchTextField from "../../UI/TextField";

import styles from "./sidebars.module.scss";
const Search = () => {
  const location = useLocation().pathname;

  let titleText =
    location === "/companies"
      ? "Search all staff.am companies"
      : "Search all staff.am jobs";

  return (
    <div className={styles.searchSidebar}>
      <div className={styles.searchTitle}>
        <h1>{titleText}</h1>
        <div class="search-input">
          <SearchTextField />
        </div>
        <div className={styles.searchButton}>
          <Button size="small">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
