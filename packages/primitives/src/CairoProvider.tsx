import React from "react";
import { ThemeProvider } from "theme-ui";

export const CairoProvider = ({ theme, children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
