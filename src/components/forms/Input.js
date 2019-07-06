/** @jsx jsx */
import { jsx } from "theme-ui";
import theme from "../../theme";

function Input({ sx, ...rest }) {
  return <input sx={{ ...theme.components.input.default, ...sx }} {...rest} />;
}

export default Input;
