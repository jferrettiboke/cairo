import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "../Box";

export default function Group({ sx, ...rest }) {
  const { theme } = useThemeUI();
  const { group } = theme.forms;
  return <Box sx={{ ...group, ...sx }} {...rest} />;
}
