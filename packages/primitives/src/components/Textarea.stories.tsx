import React from "react";
import { Box, Textarea } from "../";

export default {
  title: "Components/Textarea",
  component: Textarea,
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
        <Box
          sx={{
            width: ["100%", "75%", "50%"],
            "& > *": { mb: "20px !important" },
          }}
        >
          {storyFn()}
        </Box>
      </Box>
    ),
  ],
};

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet eros odio. Cras maximus mauris vitae congue ullamcorper. Integer a nulla vulputate, mattis nulla ac, consectetur arcu.";

export const Default = () => (
  <>
    <Textarea />
    <Textarea placeholder="Type your name..." />
    <Textarea defaultValue={text} />
    <Textarea disabled defaultValue={text} />
  </>
);
