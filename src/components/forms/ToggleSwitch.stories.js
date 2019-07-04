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

storiesOf("Components/Forms/ToggleSwitch", module)
  .addDecorator(CenterDecorator)
  .add("normal", () => (
    <>
      <Box sx={{ my: "5" }}>
        <ToggleSwitch />
      </Box>
      <Box sx={{ my: "5" }}>
        <ToggleSwitch checked />
      </Box>
      <Box sx={{ my: "5" }}>
        <ToggleSwitch checked={false} />
      </Box>
    </>
  ));
