import React, { useRef, useState } from "react";
import style from "../input/input.module.scss";
import { AiFillFileImage } from "react-icons/ai";

const InputField = ({
  name,
  type,
  placeholder,
  register,
  errors,
  border,
  imageContent,
  img,
  defaultValue,
}) => {
  const hasType = type === "file" ? { display: "none" } : null;

  if (type === "file") {
  }

  const fileInputRef = useRef(null);
  return (
    <div className={style.inputBlock}>
      <input
        style={hasType}
        defaultValue={defaultValue}
        type={type}
        id={type}
        ref={fileInputRef}
        placeholder={placeholder}
        className={
          border ? `${style.input} ${style.noneBorder}` : `${style.input}`
        }
        {...register(name, {
          required: `Invalid ${name}`,
        })}
      />
      {type === "file" ? (
        <label className={style.label} htmlFor="file">
          {imageContent?.[0]?.name ? (
            <div className={style.img__block}>
              <img src={img} alt="img" />
              <span>{imageContent[0].name}</span>
            </div>
          ) : (
            <>
              <AiFillFileImage
                style={{
                  width: "30px",
                  height: "30px",
                }}
              />
              <span>Add a image</span>
            </>
          )}
        </label>
      ) : null}

      <span className={style.error__style}>
        {errors && errors[name] && <p>{errors[name].message}</p>}
      </span>
    </div>
  );
};

export default InputField;
