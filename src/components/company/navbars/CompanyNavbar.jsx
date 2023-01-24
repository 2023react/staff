import React from "react";

import styles from "./CompanyNavbar.module.scss";
import { jobsData } from "../../../constants/jobsdata";
import BassicVerifiedIcon from "../../../UI/VerifiedIcon";
import FollowButton from "../../../UI/Button";
import HeartIcon from "../../../UI/HeartIcon";
import { COLORS } from "../../../constants/styles";
import ImageAvatars from "../../../UI/Avatar";

const jobData = jobsData[3];
const CompanyNavbar = ({ photoCoverUrl }) => {
  const verifiedIconStyles = { width: "25px" };
  const heartIconStyles = {
    width: "18px",
    marginRight: "5px",
  };
  const customButtonStylesRed = {
    "&:hover": {
      color: "white",
      backgroundColor: COLORS.customRed,
    },
  };
  const avatarCustomStyles = { width: 140, height: 140 };
  return (
    <div className={styles.companyNavbar}>
      <div className={"styles.companyCoverPhoto"}>
        <img src="/img/jobtitle.png" style={{ width: "100%" }} />
      </div>

      <div className={styles.companyInfo}>
        <div className={styles.companyPhoto}>
          <ImageAvatars
            photoURL={jobData.photoUrl}
            customStyles={avatarCustomStyles}
          />
        </div>
        <div className={styles.companyInfoBlock}>
          <div className={styles.companyName}>
            <h1>companyName</h1>
            <BassicVerifiedIcon
              customStyles={verifiedIconStyles}
            ></BassicVerifiedIcon>
          </div>

          <div className={styles.titleList}>
            <span>1234 Views</span>
            <span> 34 Followers</span>
          </div>
        </div>
        <div className={styles.titleActiveJobs}>
          <span>1234 Views</span>
          <span> 34 Followers</span>
        </div>
        <div className={styles.followBtn}>
          <FollowButton
            size="small"
            color="customRed"
            variant="outlined"
            customStyles={customButtonStylesRed}
          >
            <HeartIcon customStyles={heartIconStyles} /> Follow
          </FollowButton>
        </div>{" "}
      </div>
    </div>
  );
};

export default CompanyNavbar;
