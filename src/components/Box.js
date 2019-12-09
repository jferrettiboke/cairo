import React from "react";
import { Box as TUI_Box } from "@theme-ui/components";

export default function Box({ sx, ...rest }) {
  return <TUI_Box sx={sx} {...rest} />;
}
