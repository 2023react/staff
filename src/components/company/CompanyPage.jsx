import React from "react";
import { useSelector } from "react-redux";
import BasicButtons from "../../UI/Button";

import { db } from "../../firebase";

import { v4 as uuid } from "uuid";

import CompanyNavbar from "./navbars/CompanyNavbar";

import styles from "./company.module.scss";
import { useEffect, useCallback } from "react";

import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react";
import JobItem from "../content/JobItem";
import { useNavigate } from "react-router";

const CompanyPage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.loginSlice.currentUser);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(
          collection(db, "jobs"),
          where("companyName", "==", currentUser.displayName)
        );
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ item: doc.data(), id: doc.id });
        });
        setJobs(data);
      } catch (error) {}
    };

    getData();
  }, [currentUser?.displayName]);

  const onClickAdd = () => {
    navigate("/addNewWork");
  };

  return (
    <div className={styles.outContiner}>
      <div className="container">
        <div className={styles.company}>
          <CompanyNavbar />
          {/* <div style={{ backgroundColor: "green", margin: "14px" }}>
            <h2>{currentUser?.displayName}</h2>
            <ImageAvatars
              companyName={currentUser?.displayName}
              photoURL={currentUser?.photoURL}
            />
          </div> */}
          <BasicButtons onClick={onClickAdd} className={styles.btn}>
            Add New Work
          </BasicButtons>
          {jobs.map((j) => (
            <JobItem item={j.item} id={j.id} key={uuid()} toCompany />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
