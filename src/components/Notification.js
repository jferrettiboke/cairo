import React from "react";
import Box from "./Box";

const variants = {
  default: {
    // Raw
    border: "1px solid",
    // Theme
    bg: "white",
    borderColor: "gray.200",
    color: "black"
  },
  success: {
    bg: "blue.600",
    color: "white"
  },
  error: {
    bg: "red.600",
    color: "white"
  }
};

export default function Notification({ sx, variant, ...rest }) {
  return (
    <Box
      sx={{
        // Theme
        borderRadius: "default",
        boxShadow: "lg",
        p: "5",
        width: "full",
        // Custom,
        ...(variants[variant] || variants.default),
        // Extend
        ...sx
      }}
      {...rest}
    />
  );
}
