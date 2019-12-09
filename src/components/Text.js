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

function Text({ bold = false, truncate = false, sx, ...rest }) {
  return (
    <Box
      as="span"
      sx={{
        ...(bold && styles.bold),
        ...(truncate && styles.truncate),
        ...sx
      }}
      {...rest}
    />
  );
}

export default Text;
