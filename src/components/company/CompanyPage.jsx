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
const CompanyPage = () => {
  const currentUser = useSelector((state) => state.loginSlice.currentUser);
  const { data, isLoading } = useGetDataQuery({ id: currentUser.uid });
  const currentInfo = useSelector((state) => state.companyInfoSlice);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState();
  const handleClose = () => {
    setOpen(false);
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
              data.map((p, i) => {
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
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
