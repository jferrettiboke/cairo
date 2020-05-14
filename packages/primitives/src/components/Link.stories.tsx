import React from "react";
import { Box, Link } from "../";

export default {
  title: "Components/Link",
  component: Link,
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
  <Link href="#" title="Hi there!">
    Link
  </Link>
);
