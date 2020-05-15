import React from "react";
import { Box, BoxProps } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export type BadgeProps = BoxProps & {
  styleConfig?: any;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ sx, ...props }, forwardedRef: any) => {
    const { getPartStates } = useStyleConfig("Badge", props);
    const badge = getPartStates("badge");

    return (
      <Box
        {...props}
        as="span"
        ref={forwardedRef}
        data-part-id="badge"
        sx={{
          ...badge?._normal,
          ...sx,
        }}
      />
    );
  }
);

Badge.defaultProps = {
  styleConfig: {},
};
