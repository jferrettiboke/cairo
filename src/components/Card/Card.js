import React from "react";
import Box from "../Box";

export default function Card({ sx, ...rest }) {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "lg",
        backgroundColor: "background",
        width: "100%",
        color: "text",
        boxShadow: "lg",
        overflow: "hidden",
        ...sx
      }}
      {...rest}
    />
  );
}
