import React from "react";
import { useThemeUI } from "theme-ui";
import { Heading as TUI_Heading } from "@theme-ui/components";

export default function Heading({ sx, size, children, ...rest }) {
  const { theme } = useThemeUI();
  const { _common, sizes } = theme.headings;
  return (
    <TUI_Heading
      sx={{
        ..._common,
        ...sizes[size],
        ...sx
      }}
      {...rest}
    >
      {children}
    </TUI_Heading>
  );
}
