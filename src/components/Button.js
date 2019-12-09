import React from "react";
import { useThemeUI } from "theme-ui";
import { Button as TUI_Button } from "@theme-ui/components";

import LoadingDots from "./LoadingDots";

export default function Button({
  sx,
  kind,
  size,
  isLoading = false,
  children,
  ...rest
}) {
  const { theme } = useThemeUI();
  const { _common, kinds, sizes } = theme.buttons;
  return (
    <TUI_Button
      sx={{
        ..._common,
        ...kinds._common,
        ...kinds[kind || kinds._default],
        ...sizes[size || sizes._default],
        ...sx
      }}
      {...rest}
    >
      {isLoading ? <LoadingDots /> : children}
    </TUI_Button>
  );
}
