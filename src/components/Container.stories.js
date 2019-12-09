import React from "react";
import { storiesOf } from "@storybook/react";

import Container from "./Container";

storiesOf("Components/Container", module).add("default", () => {
  return (
    <Container bg={["red", "pink", "blue", "purple"]}>
      This is a container
    </Container>
  );
});
