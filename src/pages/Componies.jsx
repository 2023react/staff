import React from "react";
import MainContent from "../components/content/MainContent";
import RegisterCompany from "../components/login/companyRegister/RegisterCompany";
import RegisterForm from "../components/login/registerForm/RegisterForm";
import MainSidebar from "../components/sidebars/MainSidebar";

const Componies = () => {
  return (
    // <RegisterCompany />
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
