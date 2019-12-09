import React from "react";
import { useThemeUI } from "theme-ui";
import { Button as TUI_Button } from "@theme-ui/components";

import Box from "./Box";

export default function Badge({ sx, kind, ...rest }) {
  const { theme } = useThemeUI();
  const { kinds } = theme.badges;
  return (
    <Box
      as="span"
      sx={{
        display: "inline-block",
        textTransform: "uppercase",
        borderRadius: "full",
        fontSize: "xs",
        height: 5,
        minWidth: 5,
        textAlign: "center",
        px: 1,
        ...kinds._common,
        ...kinds[kind || kinds._default],
        ...sx
      }}
      {...rest}
    />
  );
}
