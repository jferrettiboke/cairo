/** @jsx jsx */
import { jsx, css } from "theme-ui";
import { keyframes } from "@emotion/core";

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

function LoadingDots() {
  const blink = keyframes`
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  `;

  return (
    <span
      css={{
        "& > span": {
          animation: `${blink} 1.4s ease infinite`,
          /**
           * This makes sure that the starting style (opacity: .2)
           * of the animation is applied before the animation starts.
           * Otherwise we would see a short flash or would have
           * to set the default styling of the dots to the same
           * as the animation. Same applies for the ending styles.
           */
          animationFillMode: "both"
        },
        "& > span:nth-child(2)": {
          animationDelay: "0.2s"
        },
        "& > span:nth-child(3)": {
          animationDelay: "0.4s"
        }
      }}
    >
      <span>•</span>
      <span>•</span>
      <span>•</span>
    </span>
  );
}

export default function Button({
  size,
  variant,
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
        m: 0,
        p: 0,

        // Theme
        bg: "transparent",
        borderRadius: "default",
        fontFamily: "sans",
        letterSpacing: "2",
        lineHeight: "none",

        ...(variants[variant] || variants.secondary),
        ...(sizes[size] || sizes.md),
        ...sx
      }}
      {...rest}
    >
      {loading ? <LoadingDots /> : children}
    </button>
  );
}
