import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Paragraph from "./Paragraph";
import Divider from "./Divider";

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

storiesOf("Components/Divider", module)
  .addDecorator(CenterDecorator)
  .add("default", () => <Divider />)
  .add("with custom styles", () => (
    <Box
      sx={{
        p: "10",
        bg: "black",
        color: "white",
        borderRadius: "lg",
        boxShadow: "xl"
      }}
    >
      <Paragraph sx={{ fontSize: "2xl", fontWeight: "700" }}>
        Suspendisse cursus augue vulputate, elementum dolor sit amet, sagittis
        elit.
      </Paragraph>
      <Divider sx={{ borderColor: "gray.900", my: "8" }} />
      <Paragraph>
        Cras semper mauris ligula, ac volutpat enim vehicula non. Morbi ex dui,
        facilisis pharetra accumsan id, porttitor vitae velit. Sed luctus felis
        a eros viverra, ut sollicitudin risus ultricies.
      </Paragraph>
    </Box>
  ));
