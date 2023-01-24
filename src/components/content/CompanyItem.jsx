import React from "react";
import styles from "./contents.module.scss";
import BasicButtons from "../../UI/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

<<<<<<<< HEAD:src/components/content/CompanyItem.jsx
import { COLORS } from "../../constants/styles";
const JobTitle = ({
========
import { COLORS } from "../constants/styles";

const JobItem = ({
>>>>>>>> 5482210881d27a46e18146e1eec22372f9ce9f37:src/components/content/JobItem.js
  photoUrl,
  jobName,
  companyName,
  location,
  deadline,
  ...props
}) => {
  const customButtonStylesRed = {
    "&:hover": {
      color: "white",
      backgroundColor: COLORS.customRed,
    },
  };

  const customButtonStylesGreen = {
    "&:hover": {
      color: "white",
      backgroundColor: COLORS.customGreen,
    },
  };
  const iconWidth = { width: "15px" };
  const heartIconStyles = {
    width: "18px",
    marginRight: "5px",
  };

  return (
 
    <Link to={`/jobs/${companyName}`}>
 
 
 
      {" "}
      <div className={styles.jobInfo}>
        <img src={photoUrl} alt="" />
        <div className={styles.jobInfoTitleBlocks}>
          <h4> {jobName}</h4>

          <div className={styles.jobInfoTitle}>
            <VerifiedIcon
              color="customGreen"
              sx={{ ...iconWidth }}
            ></VerifiedIcon>
            <span>{companyName}</span>
          </div>
        </div>
        <div className={styles.jobInfoTitleBlocks}>
          <div className={styles.jobInfoTitle}>
            {" "}
            <CalendarMonthIcon
              color="customGreen"
              sx={{ ...iconWidth }}
            ></CalendarMonthIcon>
            <span>{deadline}</span>
          </div>
          <div className={styles.jobInfoTitle}>
            <LocationOnIcon
              color="customGreen"
              sx={{ ...iconWidth }}
            ></LocationOnIcon>

            <span>{location}</span>
          </div>
        </div>

        <div className={styles.jobInfoButton}>
          <BasicButtons
            size="small"
            color="customRed"
            variant="outlined"
            customStyles={customButtonStylesRed}
          >
            <FavoriteBorderIcon
              sx={{ ...heartIconStyles }}
            ></FavoriteBorderIcon>
            Follow
          </BasicButtons>
          <BasicButtons
            size="small"
            variant="outlined"
            customStyles={customButtonStylesGreen}
          >
            View more
          </BasicButtons>
        </div>
      </div>
    </Link>
  );
};

export default JobItem;
