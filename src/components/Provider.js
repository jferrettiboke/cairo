import React from "react";
import { ThemeProvider, Styled } from "theme-ui";
import theme from "../theme";

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>{props.children}</Styled.root>
  </ThemeProvider>
);
