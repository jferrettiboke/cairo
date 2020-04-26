import React from "react";
import { Box as BoxPrimitive, BoxProps as BoxPrimitiveProps } from "theme-ui";

export type BoxProps = BoxPrimitiveProps & {};

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (props, forwardedRef) => (
    <BoxPrimitive ref={forwardedRef} data-part-id="box" {...props} />
  )
);
