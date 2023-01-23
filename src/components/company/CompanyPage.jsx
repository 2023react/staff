import React from "react";
import { useSelector } from "react-redux";
import BasicButtons from "../../UI/Button";
import { jobsData } from "../../constants/jobsdata";
import { doc, limit, orderBy, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { v4 as uuid } from "uuid";
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
    <div className="container">
      <div>
        <h2>{companyName}</h2>
        <img src={photoURL} alt="" />
        CompanyPage <BasicButtons onClick={onAddJob}>ADD</BasicButtons>
      </div>
    </div>
  );
};

export default CompanyPage;
