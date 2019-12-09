import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "../Box";

export default function Textarea({ sx, ...rest }) {
  const { theme } = useThemeUI();
  const { textarea } = theme.forms;
  return <Box as="textarea" sx={{ ...textarea, ...sx }} {...rest} />;
}
