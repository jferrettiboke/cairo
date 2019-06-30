/** @jsx jsx */
import { jsx } from "theme-ui";

import Image from "./Image";

const sizes = {
  sm: { width: "8", height: "8" },
  md: { width: "16", height: "16" },
  lg: { width: "32", height: "32" }
};

function Avatar({ size, sx, ...rest }) {
  return (
    <Image
      sx={{
        borderRadius: "full",

        // Raw
        boxSizing: "border-box",

        ...(sizes[size] || sizes.md),
        ...sx
      }}
      {...rest}
    />
  );
}

export default Avatar;
