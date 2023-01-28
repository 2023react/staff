import React from "react";

import styles from "./Jobdetails.module.scss";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { jobsData } from "../../constants/jobsdata";
import { useParams } from "react-router";

import { useSelector } from "react-redux";

const jobData = jobsData[3];

const JobDetailsContent = () => {
  const jobData = useSelector((state) => state.newJobSlice);

  const { id } = useParams();
  console.log(id);
  return (
    <div className={styles.mainContent}>
      <div className={styles.jobsColections}>
        <div className={styles.row}>
          <div className={styles.name_coloumn}>
            <h2>{jobData.allData.jobName}name</h2>
          </div>

          {/* <div className={styles.btn}>
            <button className={styles.box1}>Apply Online</button>
            <button className={styles.box2}>Send CV</button>
            <p className={styles.p}>{jobData.allData.date}</p>
          </div> */}
        </div>
        <div className={styles.bord}>
          <div className={styles.coloumn}>
            <div className={styles.columns__block}>
              <BookmarkIcon
                color="success"
                sx={{
                  fontSize: 20,
                }}
              />
              <span className={styles.text}>
                Employment term:<span>permanent</span>
              </span>
            </div>

            <div className={styles.columns__block}>
              <BookmarkIcon
                color="success"
                sx={{
                  fontSize: 20,
                }}
              />
              <span className={styles.text}>
                Category: <span>{jobData.allData.category}</span>
              </span>
            </div>
          </div>

          <div className={styles.coloumn}>
            <div className={styles.columns__block}>
              <BookmarkIcon
                color="success"
                sx={{
                  fontSize: 20,
                }}
              />
              <span className={styles.text}>
                Job type:<span>Full Time</span>
              </span>
            </div>

            <div className={styles.columns__block}>
              <BookmarkIcon
                color="success"
                sx={{
                  fontSize: 20,
                }}
              />
              <span className={styles.text}>
                Location: <span>{jobData.allData.location}</span>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.joblist}>
          <h3>Job description</h3>
          <div className={styles.desk}>{jobData.description}</div>

          <h3>Job responsibility</h3>
          {jobData.responsibilities}
          {/* {jobData.responsibilities.map((item) => (
              <li style={{ textAlign: "justify" }}>{item}</li>
            ))} */}

          <h3>Required qualifications</h3>

          <div>
            {jobData.qualifications}
            {/* {jobData.qualifications.map((item) => (
              <li style={{ textAlign: "justify" }}>{item}</li>
            ))} */}
          </div>

          <h3>
            Required candidate level:
            <span className={styles.levelSpan}>{jobData.allData.level}</span>
          </h3>

          <h3>Additional information</h3>
          <div className={styles.test}>
            {jobData.additionalInformation}
            {/* {jobData.additionalInformation.map((item) => (
              <li style={{ textAlign: "justify" }}>{item}</li>
            ))} */}
          </div>
          <p className={styles.oddinfo}>
            Please clearly mention that you have heard of this job opportunity
            on staff.am.{" "}
          </p>
        </div>
        <div className={styles.joblist_skills}>
          <div className={styles.inn}>
            <h3>Professional skills</h3>
            {/* <p className={styles.softskills_p}>
              {jobData.professionalSkills.map((item) => (
                <span className={styles.softskills}>{item}</span>
              ))}
            </p> */}
          </div>

          <div className={styles.inn}>
            <h3>Soft Skills</h3>

            {/* <p className={styles.softskills_p}>
              {jobData.softSkills.map((item) => (
                <span className={styles.softskills}>{item}</span>
              ))}
            </p> */}
          </div>
        </div>
      </div>
      <div className={styles.single_job_bottom}>
        <div className={styles.apply_btns_block}>
          <button className={styles.apply_now}>Apply now</button>
          <button className={styles.send_cv}>Send CV</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsContent;
