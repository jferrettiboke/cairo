import React from "react";
import Box from "../Box";

export default function Header({ sx, ...rest }) {
  return (
    <Box
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        ...sx
      }}
      {...rest}
    />
  );
}
