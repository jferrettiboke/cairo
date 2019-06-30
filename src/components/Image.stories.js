import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Image from "./Image";

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

storiesOf("Components/Image", module)
  .addDecorator(CenterDecorator)
  .add("default", () => (
    <Image
      src="https://images.unsplash.com/photo-1559160582-eab6966b680f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      alt="..."
      sx={{ width: "1/2" }}
    />
  ));
