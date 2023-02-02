import React from "react";
import { NavLink } from "react-router-dom";
import style from "./hoverMenu.module.scss";
const HoverMenu = ({
  onClickMenuItemOne,
  lableMenuItemOne,
  lableMenuItemTwo,
  onClickMenuItemTwo,
  isModal,
  isHomePage,
}) => {
  return (
    <div className={style.dropdown}>
      <div
        className={
          isHomePage ? style.dropdown__text__home : style.dropdown__text
        }
      >
        For Companies
      </div>
      <div className={style.dropdown__content}>
        <div className={style.arrow_up}></div>
        <div className={style.block__down}>
          <div className={style.dropdown__button}>
            <button onClick={onClickMenuItemOne} className={style.btn}>
              {lableMenuItemOne}
            </button>
          </div>

          <div className={style.dropdown__button}>
            {isModal ? (
              <div className={style.dropdown__button}>
                <button onClick={onClickMenuItemTwo} className={style.btn}>
                  {lableMenuItemTwo}
                </button>
              </div>
            ) : (
              <NavLink to="/company/register">
                <button className={style.btn}> {lableMenuItemTwo}</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;
