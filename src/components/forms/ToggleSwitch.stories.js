import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../Box";
import ToggleSwitch from "./ToggleSwitch";

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
    my: 5
  }
};

storiesOf("Components/Forms/ToggleSwitch", module)
  .addDecorator(CenterDecorator)
  .add("normal", () => (
    <>
      <Box {...defaultProps}>
        <ToggleSwitch />
      </Box>
      <Box {...defaultProps}>
        <ToggleSwitch checked />
      </Box>
      <Box {...defaultProps}>
        <ToggleSwitch checked={false} />
      </Box>
    </>
  ));
