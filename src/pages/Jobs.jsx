import React from "react";
import MainContent from "../components/content/MainContent";
import MainSidebar from "../components/sidebars/MainSidebar";
import "../styles.scss";
import "../App.scss";
import { useTheme } from "@emotion/react";
import JobItem from "../components/content/JobItem";

const Jobs = () => {
  const theme = useTheme();

  return (
    <div className="outContiner">
      <div className="container">
        <div className="jobs">
          <div className="sidebar">
            <MainSidebar />
          </div>
          <div className="content">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
