import React from "react";
import { Box } from "../";

export default {
  title: "Components/Box",
  component: Box,
};

export const Default = () => (
  <Box
    sx={{
      bg: "pink",
      borderRadius: 5,
      p: [1, 2, 3],
    }}
  >
    Hello world!
  </Box>
);
