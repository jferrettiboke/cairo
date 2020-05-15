import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Input = React.forwardRef(
  ({ disabled, sx, ...props }: any, ref: any) => {
    const { getPartStates } = useStyleConfig("Input", props);
    const input = getPartStates("input");

    return (
      <Box
        {...props}
        as="input"
        ref={ref}
        data-part-id="input"
        disabled={disabled}
        sx={{
          display: "block",
          fontFamily: "inherit",
          fontSize: "inherit",
          width: "100%",
          ...input?._normal,
          ...(disabled && { cursor: "not-allowed", ...input?._disabled }),
          ...(disabled !== true && {
            ":hover": { ...input?._hover },
            ":focus": { outline: "none", ...input?._focus },
          }),
          ...sx,
        }}
      />
    );
  }
);

Input.defaultProps = {
  disabled: false,
  styleConfig: {},
};
