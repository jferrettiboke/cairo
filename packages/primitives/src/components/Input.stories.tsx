import React from "react";
import { Box, Input } from "../";

export default {
  title: "Components/Input",
  component: Input,
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

const text = "Lorem ipsum dolor sit amet.";

export const Default = () => (
  <>
    <Input type="text" />
    <Input type="text" placeholder="Type your name..." />
    <Input type="text" defaultValue={text} />
    <Input type="text" disabled defaultValue={text} />
  </>
);
