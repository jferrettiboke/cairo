import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Avatar from "./Avatar";

function CenterDecorator(storyFn) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {storyFn()}
    </Box>
  );
}

storiesOf("Components/Avatar", module)
  .addDecorator(CenterDecorator)
  .add("sizes", () => (
    <>
      <Avatar
        size="sm"
        sx={{ mx: 2 }}
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
        alt="..."
      />
      <Avatar
        size="md"
        sx={{ mx: 2 }}
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
        alt="..."
      />
      <Avatar
        size="lg"
        sx={{ mx: 2 }}
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
        alt="..."
      />
    </>
  ));
