import React from "react";
import { Box, Button, ButtonProps } from "../";

function MyButton(props: ButtonProps) {
  return <Button whenWaiting="⏳" {...props} />;
}

export default {
  title: "Components/Button",
  component: Button,
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
  <Box sx={{ "& > *": { m: "10px !important" } }}>
    <Button>Action</Button>
    <Button disabled>Disabled</Button>
    <Button waiting>Action</Button>
    <MyButton waiting>Action</MyButton>
  </Box>
);
