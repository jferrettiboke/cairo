import React from "react";
import ReactDOM from "react-dom";
import { addDecorator } from "@storybook/react";
import { CairoProvider, Box } from "../src";

if (process.env.NODE_ENV !== "production") {
  var axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

addDecorator((story) => (
  <CairoProvider theme={{}}>
    <Box sx={{ p: "10px" }}>{story()}</Box>
  </CairoProvider>
));
