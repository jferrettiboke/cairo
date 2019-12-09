import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "./Box";

export default function Notification({ sx, kind, ...rest }) {
  const { theme } = useThemeUI();
  const { kinds } = theme.notifications;
  return (
    <Box
      sx={{
        ...kinds._common,
        ...kinds[kind || kinds._default],
        ...sx
      }}
      {...rest}
    />
  );
}
