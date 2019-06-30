import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Link from "./Link";

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

storiesOf("Components/Link", module)
  .addDecorator(CenterDecorator)
  .add("default", () => <Link href="#">My awesome link</Link>);
