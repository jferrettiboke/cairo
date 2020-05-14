import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const SelectOption = React.forwardRef(
  ({ sx, ...props }: any, ref: any) => {
    //   const { styleConfig, getPartStates } = useStyleConfig("Select", props);
    //   const option = getPartStates("option");

    return (
      <Box
        {...props}
        as="option"
        ref={ref}
        data-part-id="select-option"
        sx={{ ...sx }}
      />
    );
  }
);

SelectOption.defaultProps = {};

export const Select = React.forwardRef(
  ({ disabled, sx, ...props }: any, ref: any) => {
    const { styleConfig, getPartStates } = useStyleConfig("Select", props);
    const select = getPartStates("select");

    return (
      <Box
        {...props}
        as="select"
        ref={ref}
        data-part-id="select"
        disabled={disabled}
        sx={{
          display: "block",
          fontFamily: "inherit",
          fontSize: "inherit",
          width: "100%",
          ...styleConfig?.base?.select?._normal,
          ...select?._common?._normal,
          ...select?._normal,
          ...(disabled && {
            cursor: "not-allowed",
            ...styleConfig?.base?.select?._disabled,
            ...select?._common?._disabled,
            ...select?._disabled,
          }),
          ...(disabled !== true && {
            ":hover": {
              ...styleConfig?.base?.select?._hover,
              ...select?._common?._hover,
              ...select?._hover,
            },
            ":focus": {
              outline: "none",
              ...styleConfig?.base?.select?._focus,
              ...select?._common?._focus,
              ...select?._focus,
            },
          }),
          ...sx,
        }}
      />
    );
  }
);

Select.defaultProps = {
  disabled: false,
  styleConfig: {},
};
