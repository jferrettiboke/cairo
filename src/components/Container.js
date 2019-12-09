import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "./Box";

export default function Container({ sx, ...rest }) {
  const { theme } = useThemeUI();
  return (
    <Box
      sx={{
        maxWidth: theme.breakpoints,
        mx: "auto",
        px: "5",
        ...sx
      }}
      {...rest}
    />
  );
}
