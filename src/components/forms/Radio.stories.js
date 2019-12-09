import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "../Box";
import Radio from "./Radio";

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

storiesOf("Components/Forms/Radio", module)
  .addDecorator(CenterDecorator)
  .add("normal", () => {
    return (
      <>
        <Radio name="gender" value="male" /> Male
        <br />
        <Radio name="gender" value="female" defaultChecked={true} /> Female
      </>
    );
  })
  .add("disabled", () => (
    <>
      <Radio name="gender" value="male" disabled /> Male
      <br />
      <Radio name="gender" value="female" defaultChecked={true} disabled />{" "}
      Female
    </>
  ));
