import React from "react";
import { ThemeProvider, Styled, useColorMode } from "theme-ui";

import theme from "../theme";
import Box from "./Box";
import Button from "./Button";

function Wrapper({ children }) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box sx={{ p: 5 }}>
        <Button
          size="sm"
          onClick={e => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          Toggle {colorMode === "default" ? "Dark" : "Light"} Mode
        </Button>
      </Box>
      {children}
    </Box>
  );
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Wrapper>{children}</Wrapper>
    </Styled.root>
  </ThemeProvider>
);
