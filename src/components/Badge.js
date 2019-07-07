import React from "react";
import Box from "./Box";

const variants = {
  default: {
    // Theme
    bg: "black"
  },
  success: {
    bg: "blue.600"
  },
  error: {
    bg: "red.600"
  },
  warning: {
    bg: "yellow.600"
  }
};

export default function Badge({ sx, variant, ...rest }) {
  return (
    <Box
      as="span"
      sx={{
        // Raw
        display: "inline-block",
        textTransform: "uppercase",
        // Theme
        color: "white",
        borderRadius: "full",
        fontSize: "xs",
        py: "1",
        px: "2",
        // Custom,
        ...(variants[variant] || variants.default),
        // Extend
        ...sx
      }}
      {...rest}
    />
  );
}
