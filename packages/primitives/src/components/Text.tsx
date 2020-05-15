import React from "react";
import { Box, BoxProps } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export type TextProps = BoxProps & {
  styleConfig?: any;
};

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ sx, ...props }: any, ref: any) => {
    const { getPartStates } = useStyleConfig("Text", props);
    const text = getPartStates("text");

    return (
      <Box
        {...props}
        ref={ref}
        sx={{
          ...text?._normal,
          ...sx,
        }}
      />
    );
  }
);

Text.defaultProps = {
  as: "span",
  styleConfig: {},
};
