import React, { useCallback, useEffect, useState } from "react";

import styles from "./Jobdetails.module.scss";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useParams } from "react-router";
import { db } from "../../firebase";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import { doc, getDoc } from "firebase/firestore";

const JobDetailsContent = () => {
  const [jobData, setJobData] = useState([]);

  const { id } = useParams();

  const getData = useCallback(async () => {
    const docRef = doc(db, "jobs", id);
    const docSnap = await getDoc(docRef);
    setJobData(docSnap.data());
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {jobData.id && (
        <div className={styles.mainContent}>
          <div className={styles.jobsColections}>
            <div className={styles.row}>
              <div className={styles.name_coloumn}>
                <h2>{jobData.jobName}</h2>
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
                    Category: <span>{jobData.category}</span>
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
                    Location: <span>{jobData.location}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.joblist}>
              <h3>Job description</h3>
              <div className={styles.desk}>
                {parse(`${draftToHtml(jobData.description)}`)}
              </div>

              <h3>Job responsibility</h3>
              {parse(`${draftToHtml(jobData.responsibilities)}`)}
              {/* {jobData.responsibilities.map((item) => (
           <li style={{ textAlign: "justify" }}>{item}</li>
         ))} */}

              <h3>Required qualifications</h3>

              <div>
                {parse(`${draftToHtml(jobData.qualifications)}`)}
                {/* {jobData.qualifications.map((item) => (
           <li style={{ textAlign: "justify" }}>{item}</li>
         ))} */}
              </div>

              <h3>
                Required candidate level:
                <span className={styles.levelSpan}>{jobData.level}</span>
              </h3>

              <h3>Additional information</h3>
              <div className={styles.test}>
                {parse(`${draftToHtml(jobData.additionalInformation)}`)}
                {/* {jobData.additionalInformation.map((item) => (
           <li style={{ textAlign: "justify" }}>{item}</li>
         ))} */}
              </div>
              <p className={styles.oddinfo}>
                Please clearly mention that you have heard of this job
                opportunity on staff.am.{" "}
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
          <div className={styles.single_job_bottom}></div>
        </div>
      )}
    </>
  );
};

export default JobDetailsContent;
