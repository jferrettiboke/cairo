import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "../Box";

export default function Label({ sx, ...rest }) {
  const { theme } = useThemeUI();
  const { label } = theme.forms;
  return <Box as="label" sx={{ ...label, ...sx }} {...rest} />;
}
