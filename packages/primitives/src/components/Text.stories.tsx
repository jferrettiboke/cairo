import React from "react";
import { Box, Text } from "../";

export default {
  title: "Components/Text",
  component: Text,
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

export const Default = () => <Text>Hello world!</Text>;
