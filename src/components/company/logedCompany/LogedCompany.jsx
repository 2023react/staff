import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { onClickSignUp } from "../../../store/slices/loginSlice";
import style from "../logedCompany/logedCompany.module.scss";

const LogedCompany = ({ pathname }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.loginSlice.currentUser.displayName);
  const photoUrl = useSelector(
    (state) => state.loginSlice.currentUser.photoURL
  );

  const onClickSignOut = () => {
    dispatch(onClickSignUp());
    signOut(auth);
    navigate("/");
  };

  return (
    <div className={style.block}>
      <Link to="/companyPage">
        <div className={style.logoBlock}>
          <img src={photoUrl} alt="i" />
          <p
            className={pathname ? `${style.whiteColor}` : `${style.blackColor}`}
          >
            {name}
          </p>
        </div>
      </Link>

      <div onClick={onClickSignOut} className={style.btnBlock}>
        <span
          className={pathname ? `${style.whiteColor}` : `${style.blackColor}`}
        >
          Log Out
        </span>
      </div>
    </div>
  );
};

export default LogedCompany;
