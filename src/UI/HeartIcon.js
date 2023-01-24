import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

const HeartIcon = ({ customStyles, ...props }) => {
  return (
    <FavoriteBorderIcon
      sx={{ ...customStyles }}
      {...props}
    ></FavoriteBorderIcon>
  );
};

export default HeartIcon;
