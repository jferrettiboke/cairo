import React from "react";
import { Box, Divider } from "../";

export default {
  title: "Components/Divider",
  component: Divider,
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

export const Default = () => <Divider />;
