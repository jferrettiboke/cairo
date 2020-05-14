import React from "react";
import { Box, Code } from "../";

export default {
  title: "Components/Code",
  component: Code,
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

export const Default = () => <Code>$ npm i cairo</Code>;
