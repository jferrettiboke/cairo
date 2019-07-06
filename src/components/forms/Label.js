/** @jsx jsx */
import { jsx } from "theme-ui";

function Label({ sx, ...rest }) {
  return (
    <label
      sx={{
        // Raw
        display: "block",
        fontWeight: "bold",
        // Theme
        color: "gray.700",
        fontSize: "sm",
        mb: "2",
        // Extend
        ...sx
      }}
      {...rest}
    />
  );
}

export default Label;
