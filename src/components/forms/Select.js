/** @jsx jsx */
import { jsx } from "theme-ui";

function Select({ sx, ...rest }) {
  return <select sx={{ variant: "styles.select.default", ...sx }} {...rest} />;
}

export default Select;
