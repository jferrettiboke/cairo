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
      <Box>{storyFn()}</Box>
    </Box>
  );
}

const defaultProps = {
  sx: {
    my: "5",
    display: "block"
  }
};

storiesOf("Components/Avatar", module)
  .addDecorator(CenterDecorator)
  .add("sizes", () => (
    <>
      <Avatar
        size="sm"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
        alt="..."
        {...defaultProps}
      />
      <Avatar
        size="md"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
        alt="..."
        {...defaultProps}
      />
      <Avatar
        size="lg"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60"
        alt="..."
        {...defaultProps}
      />
    </>
  ));
