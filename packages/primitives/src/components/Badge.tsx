import React from "react";
import { Box, BoxProps } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export type BadgeProps = BoxProps & {
  styleConfig?: any;
  [k: string]: any;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ sx, ...props }, forwardedRef: any) => {
    const { styleConfig, getPartStates } = useStyleConfig("Badge", props);
    const badge = getPartStates("badge");

    return (
      <Box
        {...props}
        ref={forwardedRef}
        data-part-id="badge"
        sx={{
          display: "inline-block",
          ...styleConfig.base.badge._normal,
          ...badge._common._normal,
          ...badge._normal,
          ...sx,
        }}
      />
    );
  }
);

Badge.defaultProps = {
  styleConfig: {},
};
