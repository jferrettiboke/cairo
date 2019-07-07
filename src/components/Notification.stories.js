import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Notification from "./Notification";

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
      <Box sx={{ width: "1/3" }}>{storyFn()}</Box>
    </Box>
  );
}

const defaultProps = {
  sx: {
    my: "10"
  }
};

storiesOf("Components/Notification", module)
  .addDecorator(CenterDecorator)
  .add("variants", () => (
    <>
      <Notification {...defaultProps}>Default</Notification>
      <Notification variant="success" {...defaultProps}>
        Success!
      </Notification>
      <Notification variant="error" {...defaultProps}>
        Error!
      </Notification>
    </>
  ));
