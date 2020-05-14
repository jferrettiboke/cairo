import React from "react";
import { Badge, Box } from "../";

export default {
  title: "Components/Badge",
  component: Badge,
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
  <Box sx={{ "& > *": { m: "20px !important" } }}>
    <Badge>1</Badge>
    <Badge>5</Badge>
    <Badge>50</Badge>
    <Badge>150</Badge>
    <Badge>New</Badge>
  </Box>
);
