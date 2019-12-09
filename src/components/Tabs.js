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
        borderColor: "divider",
        ...sx
      }}
      {...rest}
    />
  );
}

export function Tab({ children, badge, active = false, sx, ...rest }) {
  return (
    <Box
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
          color: "text"
        },
        // Custom
        ...(active && {
          color: "text",
          fontWeight: "bold",
          borderColor: "text"
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
