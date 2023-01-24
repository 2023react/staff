import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ImageAvatars({
  companyName,
  photoURL,
  customStyles,
  ...props
}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt={companyName}
        src={photoURL}
        variant="rounded"
        sx={{ width: 56, height: 56, ...customStyles }}
        {...props}
      />
    </Stack>
  );
}
