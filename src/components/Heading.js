/** @jsx jsx */
import { jsx } from "theme-ui";

const sizes = {
  "2xl": { fontSize: "6xl" },
  xl: { fontSize: "5xl" },
  lg: { fontSize: "4xl" },
  md: { fontSize: "3xl" },
  sm: { fontSize: "2xl" },
  xs: { fontSize: "xl" }
};

function Heading({ as: Component, size, sx, ...rest }) {
  return (
    <Component
      sx={{
        color: "black",
        fontFamily: "sans",
        fontWeight: "bold",
        lineHeight: "normal",

        // Raw
        m: 0,
        p: 0,

        ...(sizes[size] || sizes.md),
        ...sx
      }}
      {...rest}
    />
  );
}

Heading.defaultProps = {
  as: "div"
};

export default Heading;
