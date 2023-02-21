import React from "react";
import style from "../loginForm/loginForm.module.scss";
import { useForm } from "react-hook-form";

import InputField from "../input/Input";

import { auth, db } from "../../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  changeCurrentUser,
  changeIsUser,
  closeLoginModal,
  openLogin,
} from "../../../store/slices/loginSlice";

import SignInButton from "../../../UI/Button";
import { doc, getDoc } from "firebase/firestore";

const CompanyLogin = () => {
  const location = useLocation();
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
      const currUser = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      try {
        console.log(currUser.user.uid);
        const docRef = doc(db, "users", currUser.user.uid);
        const d = await getDoc(docRef);

        dispatch(changeIsUser(d?.data().isUser));
        console.log("try meja");
        if (location.pathname === "/company/login") {
          dispatch(changeCurrentUser(null));
          dispatch(changeIsUser(null));
          signOut(auth);
          navigate("/");
          dispatch(openLogin());
          return;
        }
      } catch (error) {
        console.log(error);
      }
      navigate("/");
    } catch (error) {}
  };

  // const onSubmit = async (data) => {
  //   try {
  //     signInWithEmailAndPassword(auth, data.email, data.password)
  //       .then((currUser) => {
  //         return currUser;
  //       })
  //       .then(async (currUser) => {
  //         console.log(currUser.user.uid);
  //         const docRef = doc(db, "users", currUser.user.uid);
  //         const d = await getDoc(docRef);
  //         dispatch(changeIsUser(d?.data().isUser));
  //         try {
  //           if (location.pathname === "/company/login") {
  //             dispatch(changeIsUser(null));
  //             dispatch(openLogin());
  //             dispatch(changeCurrentUser(null));
  //             signOut(auth);
  //             navigate("/");
  //             return;
  //           }
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       });

  //     navigate("/");
  //   } catch (error) {}
  // };
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
          Sign In
        </SignInButton>

        <div className={style.text}>
          Don't have an account yet?
          <span className={style.forgotPAss}> Register</span> your account now.
        </div>
      </form>
    </div>
  );
};
export default CompanyLogin;
