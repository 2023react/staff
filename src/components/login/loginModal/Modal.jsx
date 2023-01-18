import React from "react";
import LoginForm from "../loginForm/LoginForm";
import style from "../loginModal/modale.module.scss";
import RegisterForm from "../registerForm/RegisterForm";
console.log(style);
const Modal = () => {
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <div className={style.header}>
          <span className={style.closeBtn}>X</span>
        </div>
        <div className={style.btnBlock}>
          <button className={`${style.btn} `}>Register your account</button>
          <button className={`${style.btn} ${style.activeBtn}`}>
            Sign in to your account
          </button>
        </div>

        {/* <RegisterForm /> */}

        <LoginForm />
      </div>
    </div>
  );
};

export default Modal;
