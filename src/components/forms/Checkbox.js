import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "../Box";

export default function Checkbox({ sx, ...rest }) {
  const { theme } = useThemeUI();
  const { checkbox } = theme.forms;
  return (
    <Box
      as="input"
      type="checkbox"
      sx={{
        ...checkbox,
        p: 0,
        height: 5,
        width: 5,
        "&:checked": {
          backgroundColor: "success.default"
        },
        ...sx
      }}
      {...rest}
    />
  );
}
