import React from "react";
import styles from "./contents.module.scss";
import BasicButtons from "../../UI/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { Link } from "react-router-dom";

import { COLORS } from "../../constants/styles";
import BassicVerifiedIcon from "../../UI/VerifiedIcon";
import HeartIcon from "../../UI/HeartIcon";

const JobItem = ({
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
            <BassicVerifiedIcon customStyles={iconWidth}></BassicVerifiedIcon>
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
            <HeartIcon customStyles={heartIconStyles} />
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
