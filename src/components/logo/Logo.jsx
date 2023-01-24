import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../../firebase";
import ImageAvatars from "../../UI/Avatar";
import { changeCurrentUser } from "../../store/slices/loginSlice";
import LogOutButton from "../../UI/Button";
import styles from "./Logo.module.scss";
const Logo = ({ currentCompany, checkHome }) => {
  const { companyName, photoURL } = currentCompany;
  const logOutButtonStyles = {
    width: "50px",
    color: checkHome ? "#fff" : "rgba(0, 0, 0, 0.5)",
    fontWeight: "700",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#333",
    },
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogOut = (e) => {
    e.preventDefault();
    dispatch(changeCurrentUser({ currentCompany: null }));
    signOut(auth);
    navigate("/");
  };
  return (
    <div className={styles.logoBox}>
      <ImageAvatars companyName={companyName} photoURL={photoURL} />

      <div className={styles.logOutBtn}>
        {" "}
        <h3
          className={`${styles.title} ${[
            !checkHome ? "" : styles.whiteTitle,
          ]}  `}
        >
          {companyName}
        </h3>
        <LogOutButton
          size="small"
          onClick={(e) => onLogOut(e)}
          customStyles={logOutButtonStyles}
        >
          LogOut{" "}
        </LogOutButton>
      </div>
    </div>
  );
};

export default Logo;
