import React from "react";
import { ThemeProvider } from "theme-ui";
import merge from "deepmerge";
import primitiveTheme from "./theme";

export const CairoProvider = ({ theme, children }: any) => (
  <ThemeProvider theme={merge(primitiveTheme, theme)}>{children}</ThemeProvider>
);
