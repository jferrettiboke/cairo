/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

export default function Paragraph({ sx, ...rest }) {
  return (
    <p
      sx={{
        ...sx
      }}
      {...rest}
    />
  );
}
