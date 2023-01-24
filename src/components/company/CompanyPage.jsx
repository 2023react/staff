import React from "react";
import { useSelector } from "react-redux";
import BasicButtons from "../../UI/Button";
import { jobsData } from "../../constants/jobsdata";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

import { v4 as uuid } from "uuid";

import ImageAvatars from "../../UI/Avatar";
import CompanyNavbar from "./navbars/CompanyNavbar";
import styles from "./company.module.scss";
const CompanyPage = () => {
  const currentUser = useSelector((state) => state.loginSlice.currentUser);

  const onAddJob = async () => {
    await setDoc(doc(db, "jobs", uuid()), {
      ...jobsData[3],
      date: Timestamp.now(),
    });
  };

  return (
    <div className={styles.outContiner}>
      <div className="container">
        <div className={styles.company}>
          <CompanyNavbar />
          <div style={{ backgroundColor: "green", margin: "14px" }}>
            <h2>{currentUser?.displayName}</h2>
            <ImageAvatars
              companyName={currentUser?.displayName}
              photoURL={currentUser.photoURL}
            />
            CompanyPage <BasicButtons onClick={onAddJob}>ADD</BasicButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
