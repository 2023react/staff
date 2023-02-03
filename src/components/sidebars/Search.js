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
      <div className={styles.searchSidebarBlock}>
        <h1>{titleText}</h1>

        <SearchTextField />

        <div className={styles.searchButton}>
          <Button size="small" variant="solid">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
