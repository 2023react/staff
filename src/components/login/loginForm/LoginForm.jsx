import React from "react";
import style from "../loginForm/loginForm.module.scss";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import InputField from "../input/Input";
import LoginButton from "../../loginButton/LoginButton";
import { auth, db } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  changeCurrentUser,
  closeLoginModal,
} from "../../../store/slices/loginSlice";
import { doc, getDoc } from "firebase/firestore";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const currentCompany = await getDoc(doc(db, "companies", res.user.uid));

      dispatch(changeCurrentUser({ currentCompany: currentCompany.data() }));

      navigate("/");
      dispatch(closeLoginModal());
    } catch (error) {}
  };

  return (
    <div className={style.loginForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.inputBlock}>
          <InputField
            heigth="large"
            name="email"
            type="email"
            placeholder="Your Email"
            register={register}
            errors={errors}
          />
        </div>

        <div className={style.inputBlock}>
          <InputField
            heigth="large"
            name="password"
            type="password"
            placeholder="Your Password"
            register={register}
            errors={errors}
          />
        </div>

        <a href="" className={style.forgotPAss}>
          Forgot Password?
        </a>

        <LoginButton name="Sign In" />

        <div className={style.text}>
          Don't have an account yet?
          <span className={style.forgotPAss}> Register</span> your account now.
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
