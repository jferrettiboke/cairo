/** @jsx jsx */
import { jsx } from "theme-ui";
import theme from "../../theme";

function Select({ sx, ...rest }) {
  return (
    <select sx={{ ...theme.components.select.default, ...sx }} {...rest} />
  );
}

export default Select;
