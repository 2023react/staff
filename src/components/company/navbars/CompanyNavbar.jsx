import React from "react";

import styles from "./navbar.module.scss";
import { jobsData } from "../../../constants/jobsdata";
import BassicVerifiedIcon from "../../../UI/VerifiedIcon";
import FollowButton from "../../../UI/Button";
import HeartIcon from "../../../UI/HeartIcon";

import ImageAvatars from "../../../UI/Avatar";
import ClockIcon from "../../../UI/ClockIcon";
import HistorIcon from "../../../UI/HistoryIcon";
import { Link } from "react-router-dom";

const jobData = jobsData[3];
const CompanyNavbar = ({ user }) => {
  const verifiedIconStyles = { width: "25px" };
  const avatarCustomStyles = { width: 140, height: 140 };
  return (
    <div className={styles.companyNavbar}>
      <div className={styles.companyCoverPhoto}>
        <img
          src="https://seekconz.corewebdna.net.au/web_images/blogs/216/1461/What%20is%20a%20cover%20letter_940x485.jpg"
          alt=""
        />
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
            <h1>{user.displayName}</h1>
            <BassicVerifiedIcon
              customStyles={verifiedIconStyles}
            ></BassicVerifiedIcon>
          </div>
          <div className={styles.titleList}>
            <div className={styles.lable}>
              <span>1234 Views</span>
              <span> 34 Followers</span>
            </div>
            <div className={styles.lable}>
              <div className={styles.lableTime}>
                {" "}
                <ClockIcon color="customGreen" fontSize="small" />{" "}
                <Link to="#">12 active jobs</Link>
              </div>
              <div className={styles.lableTime}>
                <HistorIcon color="customGreen" fontSize="small" />{" "}
                <span> 2287 job history </span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.followBtn}>
          <FollowButton size="small" variant="Follow">
            <HeartIcon /> Follow
          </FollowButton>
        </div>{" "}
      </div>
    </div>
  );
};

export default CompanyNavbar;
