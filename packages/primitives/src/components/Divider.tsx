import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Divider = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Divider", props);
  //   const divider = getPartStates("divider");

  return (
    <Box
      as="hr"
      {...props}
      ref={ref}
      data-part-id="divider"
      sx={{
        border: "none",
        height: "1px",
        bg: "#edf2f7",
        m: "0px",
        width: "100%",
        ...sx,
      }}
    />
  );
});

Divider.defaultProps = {};
