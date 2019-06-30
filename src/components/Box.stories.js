import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";

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

storiesOf("Components/Box", module)
  .addDecorator(CenterDecorator)
  .add("default", () => (
    <Box
      sx={{
        bg: "pink.200",
        borderRadius: "lg",
        fontSize: "2xl",
        p: "20"
      }}
    >
      Hello world!
    </Box>
  ));
