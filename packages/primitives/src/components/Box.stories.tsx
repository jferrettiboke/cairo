import React from "react";
import { Box } from "../";

export default {
  title: "Components/Box",
  component: Box,
  decorators: [
    (storyFn: any) => (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {storyFn()}
      </Box>
    ),
  ],
};

export const Default = () => (
  <Box
    sx={{
      bg: "pink",
      borderRadius: 5,
      p: [1, 2, 3],
      width: ["100%", "75%", "50%"],
    }}
  >
    This is a box with styles.
  </Box>
);
