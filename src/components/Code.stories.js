import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Code from "./Code";

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
      <Box sx={{ width: "1/2" }}>{storyFn()}</Box>
    </Box>
  );
}

storiesOf("Components/Code", module)
  .addDecorator(CenterDecorator)
  .add("default", () => {
    return (
      <Code language="jsx">{`
import React from "react";

// Hello component
export default function Hello({ name }) {
  return <div>Hello {name}</div>;
}`}</Code>
    );
  });
