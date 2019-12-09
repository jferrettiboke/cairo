import React from "react";
import { useThemeUI } from "theme-ui";
import { FaAngleDown } from "react-icons/fa";

import Box from "../Box";

export default function Select({ sx, ...rest }) {
  const { theme } = useThemeUI();
  const { select } = theme.forms;
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        as="select"
        sx={{
          display: "block",
          width: "100%",
          ...select,
          ...sx
        }}
        // className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        {...rest}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          px: "4",
          color: "gray.500",
          pointerEvents: "none"
        }}
      >
        <FaAngleDown />
      </Box>
    </Box>
  );
}
