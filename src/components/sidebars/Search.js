import React from "react";
import CustomColoredButton from "../../UI/Button";
import SearchTextField from "../../UI/TextField";

import styles from "./sidebars.module.scss";
const Search = () => {
  return (
    <div className={styles.searchSidebar}>
      <div className={styles.searchTitle}>
        <h1>Search all staff.am jobs</h1>
        <div class="search-input">
          <SearchTextField />
        </div>
        <div className={styles.searchButton}>
          <CustomColoredButton>Search</CustomColoredButton>
        </div>
      </div>
    </div>
  );
};

export default Search;
