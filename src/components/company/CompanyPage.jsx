import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import CompanyNavbar from "./navbars/CompanyNavbar";
import AlertDialogSlide from "../../UI/Dialog";
import styles from "./company.module.scss";
import CompanyInfo from "./Accordion/AboutUs";
import AddActionButtons from "./Accordion/AddIcon";
import parse from "html-react-parser";

import {
  useGetDataQuery,
  useUpdateDataMutation,
  useUpdateCompanyDataMutation,
  dataApi,
} from "../../store/slices/dataControlRTKQ";
import BasicButtons from "../../UI/Button";
import LinearColor from "../../UI/Progress";
import { db } from "../../firebase";
import { useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import JobItem from "../content/JobItem";
import { useNavigate, useParams } from "react-router";
import TextEditor from "../textEditor/TextEditor";
import Contacts from "./contacts/Contacts";

const CompanyPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const currentUser = useSelector((state) => state.loginSlice.currentUser);
  const id = params.id;

  // const { data, isLoading } = useGetDataQuery(id);
  // console.log(isLoading, i + 1);
  // const currentInfo = useSelector((state) => state.companyInfoSlice);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState();
  const [defaultInfo, setDefaultInfo] = useState();
  const [jobs, setJobs] = useState([]);
  const [companyContacts, setCompanyContacts] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getCompanyInfo = async () => {
      try {
        const docRef = doc(db, "companies", id);
        const companyDoc = await getDoc(docRef);
        setDefaultInfo(companyDoc.data().aboutUs);
        setInfo(companyDoc.data().aboutUs);
        setCompanyContacts({
          address: companyDoc.data().address,
          email: companyDoc.data().email,
          phone: companyDoc.data().phone,
        });
        console.log(companyDoc.data().aboutUs);
      } catch (error) {
        console.log(error.message);
      }
    };

    getCompanyInfo();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(
          collection(db, "jobs"),
          where("companyName", "==", currentUser?.displayName)
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
  }, [currentUser?.displayName, id]);

  const onClickAdd = () => {
    navigate("/addNewWork");
  };

  // const [updateData] = useUpdateDataMutation();
  // const handleClick = async () => {
  //   if (currentInfo.text.blocks[0].text && currentInfo.title.blocks[0].text) {
  //     updateData({
  //       id: currentUser?.uid,
  //       update: update,
  //       currentInfo: currentInfo,
  //     }).unwrap();
  //   }
  //   handleClose();
  // };

  const [updateMutation] = useUpdateCompanyDataMutation();

  const handleClick = async () => {
    updateMutation({ info, id }).unwrap();

    handleClose();
  };
  return (
    <div className={styles.outContiner}>
      <div className="container">
        {/* {isLoading ? (
          <LinearColor />
        ) : ( */}
        {
          <div className={styles.company}>
            <div>
              <CompanyNavbar user={currentUser} />
            </div>
            <h2 className={styles.aboutTitle}>About Us</h2>
            <div className={styles.companyInfo}>
              <CompanyInfo
                title={"About US"}
                text={info}
                key={uuid()}
                onClick={(currentData) => {
                  // setUpdate({ ...currentData });
                  setOpen(true);
                }}
              />
            </div>

            {/* <div>{parse(`${draftToHtml(info)}`)}</div> */}
            <div className={styles.addInfo}>
              <AddActionButtons
                onClick={() => {
                  setOpen(true);
                  // setUpdate();
                }}
              />
            </div>

            <div className={styles.editorDialog}>
              <AlertDialogSlide
                open={open}
                handleClose={handleClose}
                title="Type info about your company"
              >
                {/* <div className={styles.editorBlock}>
                  <p>Title</p>
                  <EditorComponent data={update} isTitle />
                </div>

                <div className={styles.editorBlock}>
                  <p>Description</p>
                  <EditorComponent data={update} />
                </div> */}
                <TextEditor
                  big
                  value={defaultInfo}
                  onChange={(editorState) => {
                    setInfo({
                      ...editorState,
                    });
                  }}
                />

                <BasicButtons className={styles.Addbtn} onClick={handleClick}>
                  ADD
                </BasicButtons>
              </AlertDialogSlide>
            </div>

            <BasicButtons onClick={onClickAdd} className={styles.btn}>
              Add New Work
            </BasicButtons>
            <h2>Active Jobs</h2>
            {jobs.map((j) => (
              <JobItem item={j.item} id={j.id} key={uuid()} toCompany />
            ))}
          </div>
        }

        <Contacts contacts={companyContacts} />
      </div>
    </div>
  );
};

export default CompanyPage;
