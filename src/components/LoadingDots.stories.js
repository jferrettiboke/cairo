import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import LoadingDots from "./LoadingDots";

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

storiesOf("Components/LoadingDots", module)
  .addDecorator(CenterDecorator)
  .add("default", () => <LoadingDots />);
