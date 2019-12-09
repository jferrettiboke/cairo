import React from "react";
import { useThemeUI } from "theme-ui";
import { Avatar as TUI_Avatar } from "@theme-ui/components";

export default function Avatar({ sx, size, ...rest }) {
  const { theme } = useThemeUI();
  return (
    <TUI_Avatar
      sx={{
        ...theme.avatars.sizes[size],
        ...sx
      }}
      {...rest}
    />
  );
}
