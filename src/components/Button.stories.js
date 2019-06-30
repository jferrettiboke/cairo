import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Button from "./Button";

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

storiesOf("Components/Button", module)
  .addDecorator(CenterDecorator)
  .add("variants", () => (
    <>
      <Button variant="primary" {...defaultProps}>
        Primary
      </Button>
      <Button variant="secondary" {...defaultProps}>
        Secondary (default)
      </Button>
    </>
  ))
  .add("sizes", () => (
    <>
      <Button size="sm" {...defaultProps}>
        Small
      </Button>
      <Button {...defaultProps}>Medium (default)</Button>
      <Button size="lg" {...defaultProps}>
        Large
      </Button>
    </>
  ))
  .add("loading", () => (
    <>
      <Button loading variant="primary" {...defaultProps}>
        Submit
      </Button>
      <Button loading variant="secondary" {...defaultProps}>
        Submit
      </Button>
    </>
  ));
