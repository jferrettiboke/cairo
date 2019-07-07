import React from "react";
import Box from "./Box";

const variants = {
  default: {
    // Raw
    border: "1px solid",
    // Theme
    bg: "white",
    borderColor: "gray.200"
  },
  success: {
    bg: "green.400"
  },
  error: {
    bg: "red.400"
  },
  warning: {
    bg: "yellow.400"
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
