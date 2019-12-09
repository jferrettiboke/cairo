import React from "react";
import Box from "./Box";

export function BottomNav({ sx, ...rest }) {
  return (
    <Box
      as="nav"
      sx={{
        // Raw
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid",
        // Theme
        borderColor: "divider",
        width: "full",
        // Extend
        ...sx
      }}
      {...rest}
    />
  );
}

export function BottomNavLink({ children, icon, sx, ...rest }) {
  return (
    <Box
      as="a"
      sx={{
        // Raw
        display: "flex",
        justifyContent: "center",
        // Theme
        p: "3",
        color: "text",
        textDecoration: "none",
        // Extend
        ...sx
      }}
      {...rest}
    >
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ color: "gray.700" }}>{icon}</Box>
        <Box sx={{ fontSize: "xs" }}>{children}</Box>
      </Box>
    </Box>
  );
}
