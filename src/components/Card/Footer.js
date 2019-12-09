import React from "react";
import Box from "../Box";

export default function Footer({ sx, ...rest }) {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bg: "foreground",
        overflow: "hidden",
        ...sx
      }}
      {...rest}
    />
  );
}
