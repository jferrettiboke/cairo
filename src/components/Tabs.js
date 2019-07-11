import React from "react";
import Box from "./Box";

export function Tabs({ sx, ...rest }) {
  return (
    <Box
      as="nav"
      sx={{
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid",
        borderColor: "gray.200",
        ...sx
      }}
      {...rest}
    />
  );
}

export function Tab({ children, badge, active = false, sx, ...rest }) {
  return (
    <Box
      as="a"
      sx={{
        // Raw
        display: "block",
        cursor: "pointer",
        whiteSpace: "nowrap",
        borderBottom: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        // Theme
        color: "gray.500",
        px: "8",
        py: "3",
        "&:hover": {
          color: "black"
        },
        // Custom
        ...(active && {
          color: "black",
          fontWeight: "bold",
          borderColor: "black"
        }),
        // Extend
        ...sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
