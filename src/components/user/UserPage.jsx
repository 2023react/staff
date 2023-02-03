import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import AlertDialogSlide from "../../UI/Dialog";
import styles from "./user.module.scss";

import AddActionButtons from "./accordion/AddIcon";
import EditorComponent from "./editor/Editor";
import {
  useGetDataQuery,
  useUpdateDataMutation,
} from "../../store/slices/dataControlRTKQ";
import BasicButtons from "../../UI/Button";
import LinearColor from "../../UI/Progress";
import { useEffect, useCallback } from "react";
import UserNavbar from "./navbars/UserNavbar";
import { RESUME } from "../../constants/userdata";
import ResumeItem from "./accordion/ResumeItem";

const UserPage = () => {
  const currentUser = useSelector((state) => state.loginSlice.currentUser);

  console.log(currentUser);
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
        <div className={styles.user}>
          <div>
            <UserNavbar user={currentUser} />
          </div>
          <div className={styles.userInfo}>
            {isLoading ? (
              <LinearColor />
            ) : (
              RESUME.map((p) => {
                return (
                  <ResumeItem
                    title={p.title}
                    lable={p.lable}
                    key={uuid()}
                    onClick={(currentData) => {
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

export default UserPage;
