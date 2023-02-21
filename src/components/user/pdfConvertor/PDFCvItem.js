import React from "react";
import draftToHtml from "draftjs-to-html";
import styles from "./pdfCvItem.module.scss";
import parse from "html-react-parser";
import Details from "../accordion/Details";
import { v4 as uuid } from "uuid";
const PDFCvItem = ({ title, lable, cvData, children, onClick, data }) => {
  return (
    <div>
      {" "}
      <div className={styles.pdfItem}>
        <h3>{title}</h3>

        {cvData[title]?.editorData || cvData[title]?.formData.length ? (
          <>
            {parse(`${draftToHtml(data.editorData)}`)}
            {cvData[title]?.formData?.map((item, i) => {
              return (
                <Details item={item} title={title} index={i} key={uuid()} />
              );
            })}{" "}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PDFCvItem;
