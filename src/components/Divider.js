import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "./Box";

export default function Divider({ kind, sx, ...rest }) {
  const { theme } = useThemeUI();
  const { kinds } = theme.dividers;
  return (
    <Box
      as="hr"
      sx={{
        ...kinds[kind || kinds._default],
        ...sx
      }}
      {...rest}
    />
  );
}
