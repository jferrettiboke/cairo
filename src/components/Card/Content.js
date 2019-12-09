import React from "react";
import Box from "../Box";

export default function Content({ sx, ...rest }) {
  return <Box sx={{ m: "5", ...sx }} {...rest} />;
}
