import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Input from "./Input";

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

const defaultProps = {
  sx: {
    my: 5
  }
};

storiesOf("Components/Input", module)
  .addDecorator(CenterDecorator)
  .add("normal", () => (
    <>
      <Input {...defaultProps} />
      <Input placeholder="Your email" {...defaultProps} />
      <Input value="john@gmail.com" {...defaultProps} />
    </>
  ))
  .add("disabled", () => <Input value="john@gmail.com" disabled />)
  .add("read-only", () => <Input value="john@gmail.com" readOnly />);
