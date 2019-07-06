/** @jsx jsx */
import { jsx } from "theme-ui";

import LoadingDots from "./LoadingDots";

const sizes = {
  sm: {
    py: "3",
    px: "4",
    fontSize: "xs"
  },
  md: {
    py: "4",
    px: "8",
    fontSize: "base"
  },
  lg: {
    py: "5",
    px: "12",
    fontSize: "xl"
  }
};

const variants = {
  primary: {
    bg: "black",
    color: "white",
    "&:hover": {
      bg: "gray.800"
    }
  },
  secondary: {
    bg: "gray.300",
    color: "black",
    "&:hover": {
      bg: "gray.400"
    }
  }
};

export default function Button({
  size,
  variant,
  block = false,
  loading = false,
  sx,
  children,
  ...rest
}) {
  return (
    <button
      sx={{
        // Raw
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        m: 0,
        p: 0,
        // Theme
        bg: "transparent",
        borderRadius: "default",
        fontFamily: "sans",
        letterSpacing: "2",
        lineHeight: "none",
        // Custom props
        ...(variants[variant] || variants.secondary),
        ...(sizes[size] || sizes.md),
        ...(block && {
          display: "block",
          width: "full"
        }),
        // Extend
        ...sx
      }}
      {...rest}
    >
      {loading ? <LoadingDots /> : children}
    </button>
  );
}
