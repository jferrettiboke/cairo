import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Text from "./Text";

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
      {storyFn()}
    </Box>
  );
}

storiesOf("Components/Text", module)
  .addDecorator(CenterDecorator)
  .add("default", () => <Text>Hello world!</Text>)
  .add("bold", () => <Text bold>Hello world!</Text>)
  .add("truncate", () => (
    <Box sx={{ width: "1/2" }}>
      <Text truncate>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Box>
  ));
