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
    const { getPartStates } = useStyleConfig("Select", props);
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
          ...select?._normal,
          ...(disabled && { cursor: "not-allowed", ...select?._disabled }),
          ...(disabled !== true && {
            ":hover": { ...select?._hover },
            ":focus": { outline: "none", ...select?._focus },
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
