import React from "react";
import JobDetailsContent from "./JobDetailsContent";
import styles from "./Jobdetails.module.scss";

import { jobsData } from "../../constants/jobsdata";
import BasicButtons from "../../UI/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { COLORS } from "../constants/styles";

const jobData = jobsData[3];
const JobDetails = () => {
  const customButtonStylesRed = {
    textTransform: "none",
    "&:hover": {
      color: "white",
      backgroundColor: COLORS.customRed,
    },
  };
  const heartIconStyles = {
    width: "18px",
    marginRight: "5px",
  };
  const customButtonStylesGreen = {
    textTransform: "none",
    "&:hover": {
      color: "white",
      backgroundColor: COLORS.customGreen,
    },
  };

  return (
    <div className="jobs">
      <div className="container">
        <div className={styles.search}>
          <div className={styles.header_info}>
            <img src="/img/jobtitle.png" />
            <div className={styles.contailner_relative}>
              <div className={styles.image}>
                <img src={jobData.photoUrl} />
              </div>
            </div>

            <div className={styles.company}>
              <div className={styles.company_info}>
                <div className={styles.company_title}>
                  <h1>{jobData.companyName}</h1>
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
                    sx={{ ...customButtonStylesGreen }}
                  >
                    Save this Job
                  </BasicButtons>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="sidebar"></div>
        <JobDetailsContent />
      </div>
    </div>
  );
};

export default JobDetails;
