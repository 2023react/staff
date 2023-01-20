import React from "react";
import MainContent from "../components/content/MainContent";
import MainSidebar from "../components/sidebars/MainSidebar.js";
const Componies = () => {
  return (
    <div className="jobs">
      <div className="sidebar">
        <MainSidebar />
      </div>
      <div className="content">
        <MainContent />
      </div>
    </div>
  );
};

export default Componies;