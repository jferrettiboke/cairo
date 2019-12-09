import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Heading from "./Heading";

storiesOf("Components/Heading", module).add("sizes", () => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Heading as="h1" size="2xl">
      Hello world!
    </Heading>
    <Heading as="h2" size="xl">
      Hello world!
    </Heading>
    <Heading as="h3" size="lg">
      Hello world!
    </Heading>
    <Heading as="h4" size="md">
      Hello world!
    </Heading>
    <Heading as="h5" size="sm">
      Hello world!
    </Heading>
    <Heading as="h6" size="xs">
      Hello world!
    </Heading>
  </Box>
));
