import React from "react";
import style from "../loginButton/loginbutton.module.scss";
const LoginButton = ({ name }) => {
  return (
    <div className={style.btn__block}>
      <button type="submit" className={style.loginBtn}>
        {name}
      </button>
    </div>
  );
};

export default LoginButton;
