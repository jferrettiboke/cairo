import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../Box";
import Textarea from "./Textarea";

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

storiesOf("Components/Forms/Textarea", module)
  .addDecorator(CenterDecorator)
  .add("normal", () => (
    <>
      <Textarea {...defaultProps} />
      <Textarea placeholder="Your email" {...defaultProps} />
      <Textarea value="john@gmail.com" {...defaultProps} />
    </>
  ))
  .add("disabled", () => <Textarea value="john@gmail.com" disabled />)
  .add("read-only", () => <Textarea value="john@gmail.com" readOnly />);
