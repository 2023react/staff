import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import CompanyNavbar from "./navbars/CompanyNavbar";
import AlertDialogSlide from "../../UI/Dialog";
import styles from "./company.module.scss";
import CompanyInfo from "./Accordion/AboutUs";
import AddActionButtons from "./Accordion/AddIcon";
import EditorComponent from "./Editor/Editor";
import {
  useGetDataQuery,
  useUpdateDataMutation,
} from "../../store/slices/dataControlRTKQ";
import BasicButtons from "../../UI/Button";
import LinearColor from "../../UI/Progress";
import { db } from "../../firebase";
import { useEffect, useCallback } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import JobItem from "../content/JobItem";
import { useNavigate } from "react-router";

const CompanyPage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.loginSlice.currentUser);
  console.log(currentUser);
  const { data, isLoading } = useGetDataQuery({ id: currentUser.uid });
  const currentInfo = useSelector((state) => state.companyInfoSlice);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState();

  const handleClose = () => {
    setOpen(false);
  };

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
  const [updateData] = useUpdateDataMutation();
  const handleClick = async () => {
    updateData({
      id: currentUser.uid,
      update: update,
      currentInfo: currentInfo,
    }).unwrap();

    handleClose();
  };
  return (
    <div className={styles.outContiner}>
      <div className="container">
        <div className={styles.company}>
          <div>
            <CompanyNavbar user={currentUser} />
          </div>
          <div className={styles.companyInfo}>
            {isLoading ? (
              <LinearColor />
            ) : (
              data.map((p) => {
                return (
                  <CompanyInfo
                    title={p.title}
                    text={p.text}
                    key={uuid()}
                    onClick={(currentData) => {
                      setUpdate({ ...currentData });
                      setOpen(true);
                    }}
                  />
                );
              })
            )}
          </div>
          <div className={styles.addInfo}>
            <AddActionButtons
              onClick={() => {
                setOpen(true);
                setUpdate();
              }}
            />
          </div>

          <div className={styles.editorDialog}>
            <AlertDialogSlide
              open={open}
              handleClose={handleClose}
              title="Type your text"
            >
              <BasicButtons onClick={handleClick}> ADD</BasicButtons>
              <EditorComponent
                data={update}
                handleClose={handleClose}
                isTitle={true}
              />
              <EditorComponent
                data={update}
                handleClose={handleClose}
                isTitle={false}
              />
            </AlertDialogSlide>
          </div>

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
