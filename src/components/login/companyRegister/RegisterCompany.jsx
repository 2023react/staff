import React, { useEffect, useState } from "react";

import style from "../companyRegister/registerCompany.module.scss";

import { Controller, useForm } from "react-hook-form";

import InputField from "../input/Input";
import LoginButton from "../../loginButton/LoginButton";
import Select from "../../select/Select";

import {
  CITIES,
  INDUSTRIES_LEVELS,
  COUNTRIES,
} from "../../../constants/options";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { auth, db, storage } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

const RegisterCompany = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [img, setImg] = useState(null);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    watch,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const imgChange = watch("image");

  useEffect(() => {
    if (imgChange && imgChange[0]) {
      const picture = URL.createObjectURL(imgChange[0]);
      setImg(picture);
    }
    setImage(imgChange);
  }, [imgChange]);

  const onSubmit = async (data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const storageRef = ref(storage, data.CompanyName);
      await uploadBytesResumable(storageRef, data.image[0]).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName: data.CompanyName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "companies", res.user.uid), {
              uid: res.user.uid,
              companyName: data.CompanyName,
              address: data.address,
              city: data.city,
              country: data.country,
              email: data.email,
              industry: data.industry,
              phone: data.phoneInput,
              photoURL: downloadURL,
            });
          } catch (err) {
            console.log(err);
          }
        });
      });
      setImage(data.image[0].name);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.registerForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <h1>Register Now</h1>
        <div className={style.block}>
          <div className={style.inputBlock}>
            <p className={style.parag}>Company name</p>
            <InputField
              heigth="large"
              name="CompanyName"
              type="text"
              placeholder="Company name"
              register={register}
              errors={errors}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Company Address</p>
            <InputField
              name="address"
              type="text"
              placeholder="Company Address"
              register={register}
              errors={errors}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Country</p>
            <Select
              name="country"
              register={register}
              errors={errors}
              options={COUNTRIES}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>City</p>
            <Select
              name="city"
              register={register}
              errors={errors}
              options={CITIES}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Industry</p>
            <Select
              name="industry"
              register={register}
              errors={errors}
              options={INDUSTRIES_LEVELS}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Phone Number</p>
            <Controller
              name="phoneInput"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  className={style.phoneInput}
                  value={value}
                  international
                  countryCallingCodeEditable={false}
                  onChange={onChange}
                  defaultCountry="AM"
                  id="phone-input"
                />
              )}
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Your Company Image</p>
            <InputField
              border
              imageContent={image}
              img={img}
              name="image"
              type="file"
              placeholder="Your image"
              register={register}
              errors={errors}
              id="file"
            />
          </div>

          <div className={style.inputBlock}>
            <p className={style.parag}>Email</p>
            <InputField
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
              name="pas"
              type="password"
              placeholder="Repeat Password"
              register={register}
              errors={errors}
            />
          </div>

          <LoginButton name="Register" />
        </div>
      </form>
    </div>
  );
};
export default RegisterCompany;
