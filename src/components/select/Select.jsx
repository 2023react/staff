import React from "react";
import style from "../select/select.module.scss";
const Select = ({ register, name, errors, options }) => {
  return (
    <div className={style.select__block}>
      <select
        className={style.select}
        {...register(name, {
          required: `Invalid ${name}`,
        })}
      >
        <option value=""></option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
      </select>

      <span>{errors && errors[name] && <p>{errors[name].message}</p>}</span>
    </div>
  );
};

export default Select;
