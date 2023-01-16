import React from "react";
import MainContent from "../components/content/MainContent";
import MainSidebar from "../components/sidebars/MainSidebar";

const Jobs = () => {
 
 
  return (
    <div className="jobs">
      <div className="sidebar">
        <MainSidebar />
      </div>
      <div className="maincontent">
        <MainContent />
      </div>
    </div>
  );
 
};

export default Jobs;
