import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import { Tabs, Tab } from "./Tabs";

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
      <Box sx={{ width: "4/5" }}>{storyFn()}</Box>
    </Box>
  );
}

storiesOf("Components/Tabs", module)
  .addDecorator(CenterDecorator)
  .add("default", () => (
    <Tabs>
      <Tab>Link 1</Tab>
      <Tab active>Link 2</Tab>
      <Tab>Link 3</Tab>
    </Tabs>
  ));
