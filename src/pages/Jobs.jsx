import React from "react";
import MainContent from "../components/content/MainContent";
import MainSidebar from "../components/sidebars/MainSidebar.js";
import "../styles.scss";
const Jobs = () => {
  return (
    <div className="main">
      <div className="jobs">
        <div className="sidebar">
          <MainSidebar />
        </div>
        <div className="content">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
