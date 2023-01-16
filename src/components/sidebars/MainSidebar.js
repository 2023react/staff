import React from "react";
import Checkbox from "../filter/Checkbox";
import Clear from "../filter/Clear";
import Title from "../filter/Title";
import AdsSidebar from "./AdsSidebar";
import InputSidebar from "./InputSidebar";

const MainSidebar = () => {
  return (
    <div>
      <div id="main_sidebar">
        <form id="jobs-filter">
          <InputSidebar />

          <AdsSidebar />

          <Clear />

          <Title>
            <Checkbox />
          </Title>
        </form>
      </div>
    </div>
  );
};

export default MainSidebar;
