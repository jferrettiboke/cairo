/** @jsx jsx */
import { jsx } from "theme-ui";

function Input({ sx, ...rest }) {
  return <input sx={{ variant: "styles.input.default", ...sx }} {...rest} />;
}

export default Input;
