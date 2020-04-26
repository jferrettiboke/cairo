import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const SelectOption = React.forwardRef(
  ({ sx, ...props }: any, ref: any) => {
    //   const { styleConfig, getPartStates } = useStyleConfig("Select", props);
    //   const option = getPartStates("option");

    return (
      <Box
        as="option"
        {...props}
        ref={ref}
        data-part-id="select-option"
        sx={{ ...sx }}
      />
    );
  }
);

SelectOption.defaultProps = {};

export const Select = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Select", props);
  //   const select = getPartStates("select");

  return (
    <Box
      as="select"
      {...props}
      ref={ref}
      data-part-id="select"
      sx={{ ...sx }}
    />
  );
});

Select.defaultProps = {};
