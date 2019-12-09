import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Button from "./Button";

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

storiesOf("Components/Button", module)
  .addDecorator(CenterDecorator)
  .add("types", () => {
    return (
      <Box>
        <Button as="a" sx={{ mx: 2 }}>
          Link
        </Button>
        <Button sx={{ mx: 2 }}>Button</Button>
      </Box>
    );
  })
  .add("kinds", () => {
    return (
      <Box>
        <Button kind="primary" sx={{ mx: 2 }}>
          Primary
        </Button>
        <Button kind="secondary" sx={{ mx: 2 }}>
          Secondary
        </Button>
      </Box>
    );
  })
  .add("sizes", () => (
    <Box>
      <Button size="sm" kind="primary" sx={{ mx: 2 }}>
        Small
      </Button>
      <Button size="md" kind="primary" sx={{ mx: 2 }}>
        Medium
      </Button>
      <Button size="lg" kind="primary" sx={{ mx: 2 }}>
        Large
      </Button>
    </Box>
  ))
  .add("with isLoading", () => (
    <Box>
      <Button isLoading kind="primary" size="sm" sx={{ mx: 2 }}>
        Small
      </Button>
      <Button isLoading kind="primary" size="md" sx={{ mx: 2 }}>
        Medium
      </Button>
      <Button isLoading kind="primary" size="lg" sx={{ mx: 2 }}>
        Large
      </Button>
      <Button isLoading kind="secondary" size="sm" sx={{ mx: 2 }}>
        Small
      </Button>
      <Button isLoading kind="secondary" size="md" sx={{ mx: 2 }}>
        Medium
      </Button>
      <Button isLoading kind="secondary" size="lg" sx={{ mx: 2 }}>
        Large
      </Button>
    </Box>
  ));
