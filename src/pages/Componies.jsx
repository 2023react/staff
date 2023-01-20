import React from "react";
import MainContent from "../components/content/MainContent";
import LoginForm from "../components/login/loginForm/LoginForm";
import Modal from "../components/login/loginModal/Modal";
import MainSidebar from "../components/sidebars/MainSidebar.js";
const Componies = () => {
  return (
    <>
      <div className="jobs">
        <div className="sidebar">
          <MainSidebar />
        </div>
        <div className="content">
          <MainContent />
        </div>
      </div>

      {/* <Modal /> */}
      {/* <LoginForm /> */}
    </>
  );
};

export default Componies;
