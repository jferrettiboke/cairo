import React from "react";
import { Box, Textarea } from "../";

export default {
  title: "Components/Textarea",
  component: Textarea,
};

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet eros odio. Cras maximus mauris vitae congue ullamcorper. Integer a nulla vulputate, mattis nulla ac, consectetur arcu.";

export const Default = () => (
  <Box sx={{ "& > *": { mb: "20px !important" } }}>
    <Textarea />
    <Textarea placeholder="Type your name..." />
    <Textarea defaultValue={text} />
    <Textarea disabled defaultValue={text} />
  </Box>
);
