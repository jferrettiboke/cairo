import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "../Box";

export default function Input({ sx, ...rest }) {
  const { theme } = useThemeUI();
  const { input } = theme.forms;
  return <Box as="input" sx={{ ...input, ...sx }} {...rest} />;
}
