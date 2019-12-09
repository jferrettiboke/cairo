import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import { Tabs, Tab } from "./Tabs";
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
      <Box sx={{ width: "4/5" }}>{storyFn()}</Box>
    </Box>
  );
}

storiesOf("Labs/Tabs", module)
  .addDecorator(CenterDecorator)
  .add("default", () => (
    <Tabs>
      <Tab>Link 1</Tab>
      <Tab active>Link 2</Tab>
      <Tab sx={{ position: "relative" }}>
        Link 3
        <Badge kind="error" sx={{ position: "absolute", top: 0, right: 0 }}>
          3
        </Badge>
      </Tab>
    </Tabs>
  ));
