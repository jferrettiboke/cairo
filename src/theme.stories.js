import React from "react";
import { storiesOf } from "@storybook/react";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";

import Box from "./components/Box";
import Heading from "./components/Heading";

function CenterDecorator(storyFn) {
  return <Box sx={{ p: "20px" }}>{storyFn()}</Box>;
}

function Section({ title, children }) {
  return (
    <Box sx={{ my: "20" }}>
      <Heading as="h2" sx={{ mb: "10" }}>
        {title}
      </Heading>
      {children}
    </Box>
  );
}

storiesOf("style guide", module)
  .addDecorator(CenterDecorator)
  .add("style guide", () => (
    <>
      <Heading as="h1" sx="">
        Style Guide
      </Heading>
      <Section title="Color Palette">
        <ColorPalette />
      </Section>
      {/* <TypeScale /> */}
      <Section title="Type Style">
        <TypeStyle
          fontSize="4xl"
          fontFamily="sans"
          fontWeight="normal"
          lineHeight="normal"
        />
        <TypeStyle
          fontSize="4xl"
          fontFamily="serif"
          fontWeight="normal"
          lineHeight="normal"
        />
        <TypeStyle
          fontSize="4xl"
          fontFamily="mono"
          fontWeight="normal"
          lineHeight="normal"
        />
      </Section>
    </>
  ));
