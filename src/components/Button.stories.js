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
      {storyFn()}
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
    <Box>
      <Button variant="primary" {...defaultProps}>
        Primary
      </Button>
      <Button variant="secondary" {...defaultProps}>
        Secondary (default)
      </Button>
    </Box>
  ))
  .add("sizes", () => (
    <Box>
      <Button variant="primary" size="sm" {...defaultProps}>
        Small
      </Button>
      <Button variant="primary" {...defaultProps}>
        Medium
      </Button>
      <Button variant="primary" size="lg" {...defaultProps}>
        Large
      </Button>
      <Button size="sm" {...defaultProps}>
        Small
      </Button>
      <Button {...defaultProps}>Medium</Button>
      <Button size="lg" {...defaultProps}>
        Large
      </Button>
    </Box>
  ))
  .add("block", () => (
    <Box sx={{ width: "2/3" }}>
      <Button block variant="primary" {...defaultProps}>
        Submit
      </Button>
    </Box>
  ))
  .add("loading", () => (
    <Box>
      <Button loading variant="primary" size="sm" {...defaultProps}>
        Small
      </Button>
      <Button loading variant="primary" {...defaultProps}>
        Medium
      </Button>
      <Button loading variant="primary" size="lg" {...defaultProps}>
        Large
      </Button>
      <Button loading size="sm" {...defaultProps}>
        Small
      </Button>
      <Button loading {...defaultProps}>
        Medium
      </Button>
      <Button loading size="lg" {...defaultProps}>
        Large
      </Button>
    </Box>
  ));
