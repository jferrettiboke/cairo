import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../Box";
import Select from "./Select";

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

storiesOf("Components/Forms/Select", module)
  .addDecorator(CenterDecorator)
  .add("normal", () => (
    <Select>
      <option />
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
  ));
