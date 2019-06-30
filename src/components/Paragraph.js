/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default function Paragraph({ sx, ...rest }) {
  return (
    <p
      sx={{
        // Raw
        m: 0,
        p: 0,

        // Theme
        my: "5",

        ...sx
      }}
      {...rest}
    />
  );
}
