import React from "react";
import style from "../loginForm/loginForm.module.scss";
import { useForm } from "react-hook-form";

import InputField from "../input/Input";

import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../../store/slices/loginSlice";

import SignInButton from "../../../UI/Button";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

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

        <SignInButton type="submit" variant="solid">
          {" "}
          Sign In{" "}
        </SignInButton>

        <div className={style.text}>
          Don't have an account yet?
          <span className={style.forgotPAss}> Register</span> your account now.
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
