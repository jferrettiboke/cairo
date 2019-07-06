/** @jsx jsx */
import { jsx } from "theme-ui";
import theme from "../../theme";

function Textarea({ sx, ...rest }) {
  return (
    <textarea sx={{ ...theme.components.input.default, ...sx }} {...rest} />
  );
}

export default Textarea;
