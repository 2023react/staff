import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import { v4 as uuid } from "uuid";
import { jobsData } from "../constants/jobsdata";

const CompanyPage = () => {
  const currentUser = useSelector((state) => state.loginSlice.currentUser);

  const onAdd = async () => {
    await setDoc(doc(db, "jobs", uuid()), {
      companyName: currentUser.displayName,
      ...jobsData[2],
    });
  };

  return (
    <div className="container">
      <button onClick={onAdd}>add</button>
    </div>
  );
};

export default CompanyPage;
