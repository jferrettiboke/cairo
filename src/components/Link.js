/** @jsx jsx */
import { jsx } from "theme-ui";

function Link({ sx, ...rest }) {
  return (
    <a
      sx={{
        color: "gray.700",
        fontFamily: "sans",
        fontSize: "base",
        fontWeight: "bold",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline"
        }
      }}
      {...rest}
    />
  );
}

export default Link;
