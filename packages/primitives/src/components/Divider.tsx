import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Divider = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  const { getPartStates } = useStyleConfig("Divider", props);
  const divider = getPartStates("divider");

  return (
    <Box
      {...props}
      as="hr"
      ref={ref}
      data-part-id="divider"
      sx={{
        border: "none",
        height: "1px",
        bg: "#eeeeee",
        m: "0px",
        width: "100%",
        ...divider?._normal,
        ...sx,
      }}
    />
  );
});

Divider.defaultProps = {};
