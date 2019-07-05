/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default function Divider({ sx, ...rest }) {
  return (
    <hr
      sx={{
        // Raw
        p: 0,
        m: 0,
        height: 0,
        border: "none",
        borderBottom: "1px solid",
        // Theme
        borderColor: "gray.300",
        width: "full",
        // Extend
        ...sx
      }}
      {...rest}
    />
  );
}
