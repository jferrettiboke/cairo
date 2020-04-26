import React from "react";
import { addDecorator } from "@storybook/react";
import { CairoProvider, Box } from "../src";
import theme from "./theme";

addDecorator((story) => (
  <CairoProvider theme={theme}>
    <Box sx={{ p: "10px" }}>{story()}</Box>
  </CairoProvider>
));
