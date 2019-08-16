/** @jsx jsx */
import { jsx } from "theme-ui";

function Textarea({ sx, ...rest }) {
  return (
    <textarea sx={{ variant: "styles.textarea.default", ...sx }} {...rest} />
  );
}

export default Textarea;
