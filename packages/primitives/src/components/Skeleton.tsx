import React from "react";
import { keyframes } from "@emotion/core";
import { Box } from "./Box";

const skeletonLoading = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const Skeleton = React.forwardRef<HTMLDivElement, any>(
  ({ sx, ...props }, forwardedRef) => (
    <Box
      ref={forwardedRef}
      {...props}
      sx={{
        backgroundImage:
          "linear-gradient(270deg, #fafafa, #eaeaea, #eaeaea, #fafafa)",
        backgroundSize: "400% 100%",
        animation: `${skeletonLoading} 8s ease-in-out infinite`,
        ...sx,
      }}
    />
  )
);
