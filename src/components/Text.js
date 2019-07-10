import React from "react";
import Box from "./Box";

const styles = {
  bold: { fontWeight: "bold" },
  truncate: {
    display: "block",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  }
};

function Text({ as = "span", bold = false, truncate = false, sx, ...rest }) {
  return (
    <Box
      as={as}
      sx={{
        // Custom
        ...(bold && styles.bold),
        ...(truncate && styles.truncate),
        // Extend
        ...sx
      }}
      {...rest}
    />
  );
}

export default Text;
