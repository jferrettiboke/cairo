import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Input = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Input", props);
  //   const input = getPartStates("input");

  return (
    <Box
      as="input"
      {...props}
      ref={ref}
      data-part-id="input"
      sx={{
        // display: "block",
        // width: "100%",
        // appearance: "none",
        // fontSize: "inherit",
        // lineHeight: "inherit",
        // border: "1px solid",
        // color: "inherit",
        // bg: "transparent",
        ...sx,
      }}
    />
  );
});

Input.defaultProps = {};
