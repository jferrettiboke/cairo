import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../Box";
import Label from "./Label";
import Input from "./Input";
import Group from "./Group";
import Button from "../Button";

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

storiesOf("Components/Forms/Label", module)
  .addDecorator(CenterDecorator)
  .add("normal", () => <Label>First name</Label>)
  .add("with Input", () => (
    <>
      <Group>
        <Label for="firstName">First name</Label>
        <Input id="firstName" />
      </Group>
      <Group>
        <Label for="lastName">Last name</Label>
        <Input id="lastName" />
      </Group>
      <Group>
        <Button block variant="primary">
          Submit
        </Button>
      </Group>
    </>
  ));
