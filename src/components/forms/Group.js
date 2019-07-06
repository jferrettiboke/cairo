import React from "react";
import Box from "../Box";

export default function Group({ sx, ...rest }) {
  return <Box sx={{ mb: "6", ...sx }} {...rest} />;
}
