import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  children,
  open,
  handleClose,
  customStylesTitle,
  title,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth="md"
        PaperProps={{
          sx: { height: "100%", maxWidth: "80%" },
        }}
      >
        {" "}
        <DialogActions>
          <CloseIcon
            sx={{ fontSize: "32px", cursor: "pointer" }}
            onClick={handleClose}
          ></CloseIcon>
        </DialogActions>
        <DialogTitle sx={{ textAlign: "center", ...customStylesTitle }}>
          {title}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
