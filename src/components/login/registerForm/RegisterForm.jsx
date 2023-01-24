import React from "react";
import style from "../registerForm/register.module.scss";
import { useForm } from "react-hook-form";

import InputField from "../input/Input";
import RegisterButtons from "../../../UI/Button";

const RegisterForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className={style.registerForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.block}>
          <div className={style.inputBlock}>
            <p className={style.parag}>First name</p>
            <InputField
              heigth="large"
              name="firstName"
              type="text"
              placeholder=" Your first name"
              register={register}
              errors={errors}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Last name</p>
            <InputField
              heigth="large"
              name="lastName"
              type="text"
              placeholder=" Your last name"
              register={register}
              errors={errors}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Email</p>

            <InputField
              heigth="large"
              name="email"
              type="email"
              placeholder="Your email"
              register={register}
              errors={errors}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Password</p>

            <InputField
              heigth="large"
              name="password"
              type="password"
              placeholder="Your Password"
              register={register}
              errors={errors}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Repeat passsword</p>

            <InputField
              heigth="large"
              name="pas"
              type="password"
              placeholder="Repeat Password"
              register={register}
              errors={errors}
            />
          </div>

          <RegisterButtons type="submit">Register </RegisterButtons>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
