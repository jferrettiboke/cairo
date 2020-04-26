import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Code = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Code", props);
  //   const code = getPartStates("code");

  return (
    <Box
      as="code"
      {...props}
      ref={ref}
      data-part-id="code"
      sx={{
        p: "1px 3px",
        borderRadius: "3px",
        bg: "#bee3f8",
        color: "#4299e1",
        ...sx,
      }}
    />
  );
});

Code.defaultProps = {};
