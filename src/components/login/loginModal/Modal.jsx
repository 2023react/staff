import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeLoginModal,
  openLogin,
  openRegister,
} from "../../../store/slices/loginSlice";
import LoginForm from "../loginForm/LoginForm";
import style from "../loginModal/modale.module.scss";
import RegisterForm from "../registerForm/RegisterForm";
const Modal = () => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const showLogin = useSelector((state) => state.loginSlice.showLogin);
  const showRegister = useSelector((state) => state.loginSlice.showRegister);
  const showComponyLogin = useSelector(
    (state) => state.loginSlice.showComponyLogin
  );

  const closeModal = () => {
    dispatch(closeLoginModal());
    document.body.style = "overflow: visible ";
  };
  const onClickBtnRegister = () => dispatch(openRegister());
  const onClickBtnLogin = () => dispatch(openLogin());

  document.body.style = "overflow: hidden";

  useEffect(() => {
    if (showLogin || showRegister) {
      const handleClick = (event) => {
        if (!modalRef.current.contains(event.target)) {
          closeModal();
        }
      };
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  }, [showLogin, showRegister]);

  return (
    <div className={style.modal}>
      <div ref={modalRef} className={style.modalContent}>
        <div className={style.header}>
          <span onClick={closeModal} className={style.closeBtn}>
            X
          </span>
        </div>
        {!showComponyLogin && (
          <div className={style.btnBlock}>
            <button
              onClick={onClickBtnRegister}
              className={
                !showRegister
                  ? `${style.btn}`
                  : `${style.btn}  ${style.activeBtn}`
              }
            >
              Register your account
            </button>
            <button
              onClick={onClickBtnLogin}
              className={
                !showLogin ? `${style.btn}` : `${style.btn}  ${style.activeBtn}`
              }
            >
              Sign in to your account
            </button>
          </div>
        )}

        <LoginForm />
      </div>
    </div>
  );
};

export default Modal;
