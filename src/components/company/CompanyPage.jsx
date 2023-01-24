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
  const { companyName, photoURL } = useSelector(
    (state) => state.loginSlice.currentCompany
  );

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
            <h2>{companyName}</h2>
            <ImageAvatars companyName={companyName} photoURL={photoURL} />
            <img src={photoURL} alt="" />
            CompanyPage <BasicButtons onClick={onAddJob}>ADD</BasicButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
