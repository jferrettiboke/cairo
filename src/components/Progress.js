import React from "react";
import Box from "./Box";

function Progress({ sx, value, ...rest }) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "9999px",
        height: "10px",
        bg: "gray.200",
        ...sx
      }}
      {...rest}
    >
      <Box
        sx={{
          borderRadius: "9999px",
          height: "100%",
          bg: value === 100 ? "success.default" : "black",
          width: `${value}%`
        }}
      ></Box>
    </Box>
  );
}

export default Progress;
