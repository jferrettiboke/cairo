import React from "react";
import Box from "../Box";

export default function Group({ sx, ...rest }) {
  return <Box sx={{ mb: "5", ...sx }} {...rest} />;
}
