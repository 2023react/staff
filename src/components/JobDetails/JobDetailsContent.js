import React from "react";

import styles from "./Jobdetails.module.scss";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import { jobsData } from "../../constants/jobsdata";
import { useParams } from "react-router";
import JobItem from "../content/JobItem";

console.log(jobsData[3]);
const jobData = jobsData[3];

const JobDetailsContent = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className={styles.mainContent}>
      <div className={styles.jobsColections}>
        <div className={styles.row}>
          <div className={styles.name_coloumn}>
            <h2>{jobData.jobName}</h2>
          </div>
          <div>
            {" "}
            <JobItem {...jobsData[3]} />
          </div>
          <div className={styles.btn}>
            <button className={styles.box1}>Apply Online</button>
            <button className={styles.box2}>Send CV</button>
            <p className={styles.p}>{jobData.deadline}</p>
          </div>
        </div>
        <div className={styles.bord}>
          <div className={styles.coloumn2}>
            <p>
              <div style={{ position: "relative" }}>
                <BookmarkIcon
                  color="success"
                  sx={{
                    fontSize: 20,
                    position: "absolute",
                    left: -20,
                  }}
                />
              </div>
              <span className={styles.span}>Employment term:</span>
              permanent
            </p>
            <p>
              <div style={{ position: "relative" }}>
                <BookmarkIcon
                  color="success"
                  sx={{
                    fontSize: 20,
                    position: "absolute",
                    left: -20,
                  }}
                />
              </div>
              <span className={styles.span}>Category: </span>
              {jobData.jobCategory}
            </p>
          </div>
          <div className={styles.coloumn1}>
            <p>
              <div style={{ position: "relative" }}>
                <BookmarkIcon
                  color="success"
                  sx={{
                    fontSize: 20,
                    position: "absolute",
                    left: -20,
                  }}
                />
              </div>
              <span className={styles.span}>Job type:</span>
              {jobData.jobType}
            </p>
            <p>
              <div style={{ position: "relative" }}>
                <BookmarkIcon
                  color="success"
                  sx={{
                    fontSize: 20,
                    position: "absolute",
                    left: -20,
                  }}
                />
              </div>
              <span className={styles.span}>Location:</span>
              {jobData.location}
            </p>
          </div>
        </div>
        <div className={styles.joblist}>
          <h3>Job description</h3>
          <p></p>
          <p className={styles.desk}>{jobData.JobDescription}</p>
          <p></p>
          <h3>Job responsibility</h3>
          <p></p>
          <ul>
            {jobData.jobresponsibilities.map((item) => (
              <li style={{ textAlign: "justify" }}>{item}</li>
            ))}
          </ul>
          <p></p>
          <h3>Required qualifications</h3>
          <p></p>
          <ul>
            {jobData.requiredqualifications.map((item) => (
              <li style={{ textAlign: "justify" }}>{item}</li>
            ))}
          </ul>
          <p></p>
          <h3>
            Required candidate level:
            <span style={{ fontWeight: "500px" }}>
              {jobData.requiredCandidateLevel}
            </span>
          </h3>
          <h3>Additional information</h3>
          <ul>
            {jobData.additionalinformation.map((item) => (
              <li style={{ textAlign: "justify" }}>{item}</li>
            ))}
          </ul>
          <p className={styles.oddinfo}>
            Please clearly mention that you have heard of this job opportunity
            on staff.am.{" "}
          </p>
        </div>
        <div className={styles.joblist_skills}>
          <div className={styles.inn}>
            <h3>Professional skills</h3>
            <p className={styles.softskills_p}>
              {jobData.professionalSkills.map((item) => (
                <span className={styles.softskills}>{item}</span>
              ))}
            </p>
          </div>

          <div className={styles.inn}>
            <h3>Soft Skills</h3>

            <p className={styles.softskills_p}>
              {jobData.softSkills.map((item) => (
                <span className={styles.softskills}>{item}</span>
              ))}
            </p>
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
