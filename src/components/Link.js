import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "./Box";

function Link({ sx, kind, ...rest }) {
  const { theme } = useThemeUI();
  const { kinds } = theme.links;
  return (
    <Box
      as="a"
      sx={{
        ...kinds[kind || kinds._default],
        ...sx
      }}
      {...rest}
    />
  );
}

export default Link;
