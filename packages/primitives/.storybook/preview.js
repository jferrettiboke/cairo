import React from "react";
import { addDecorator } from "@storybook/react";
import { CairoProvider, Box } from "../src";

addDecorator((story) => (
  <CairoProvider theme={{}}>
    <Box sx={{ p: "10px" }}>{story()}</Box>
  </CairoProvider>
));
