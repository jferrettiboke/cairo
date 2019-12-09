import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../Box";
import Checkbox from "./Checkbox";

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

storiesOf("Components/Forms/Checkbox", module)
  .addDecorator(CenterDecorator)
  .add("normal", () => {
    return <Checkbox name="cheese" value="yes" />;
  })

  .add("disabled", () => <Checkbox value="john@gmail.com" disabled />);
