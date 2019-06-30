/** @jsx jsx */
import { jsx } from "theme-ui";

function Box({ as: Component, sx, ...rest }) {
  return (
    <Component
      sx={{
        boxSizing: "border-box",
        ...sx
      }}
      {...rest}
    />
  );
}

Box.defaultProps = {
  as: "div"
};

export default Box;
