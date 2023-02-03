import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditActionButtons from "../../../UI/EditIcon";
import draftToHtml from "draftjs-to-html";
import styles from "./accordion.module.scss";
import parse from "html-react-parser";
export default function ResumeItem({ title, lable, children, onClick }) {
  const handleClick = () => {
    onClick({ title, lable });
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.changeButtons}>
            {children}
            <Typography>{lable}</Typography>
            <div className={styles.changeIcons}>
              <EditActionButtons onClick={handleClick} />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
