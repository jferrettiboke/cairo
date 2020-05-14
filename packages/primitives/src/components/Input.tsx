import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Input = React.forwardRef(
  ({ disabled, sx, ...props }: any, ref: any) => {
    const { styleConfig, getPartStates } = useStyleConfig("Input", props);
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
          ...styleConfig?.base?.input?._normal,
          ...input?._common?._normal,
          ...input?._normal,
          ...(disabled && {
            cursor: "not-allowed",
            ...styleConfig?.base?.input?._disabled,
            ...input?._common?._disabled,
            ...input?._disabled,
          }),
          ...(disabled !== true && {
            ":hover": {
              ...styleConfig?.base?.input?._hover,
              ...input?._common?._hover,
              ...input?._hover,
            },
            ":focus": {
              outline: "none",
              ...styleConfig?.base?.input?._focus,
              ...input?._common?._focus,
              ...input?._focus,
            },
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
