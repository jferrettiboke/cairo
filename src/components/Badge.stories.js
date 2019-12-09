import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Badge from "./Badge";

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
    m: "5"
  }
};
storiesOf("Components/Badge", module)
  .addDecorator(CenterDecorator)
  .add("variants", () => (
    <>
      <Badge {...defaultProps}>1</Badge>
      <Badge {...defaultProps}>5</Badge>
      <Badge {...defaultProps}>50</Badge>
      <Badge {...defaultProps}>150</Badge>
      <Badge {...defaultProps}>New</Badge>
      <Badge kind="success" {...defaultProps}>
        1
      </Badge>
      <Badge kind="error" {...defaultProps}>
        5
      </Badge>
      <Badge kind="warning" {...defaultProps}>
        50
      </Badge>
    </>
  ));
