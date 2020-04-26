import React from "react";
import {
  Button as ButtonPrimitive,
  ButtonProps as ButtonPrimitiveProps,
} from "theme-ui";
import useStyleConfig from "../hooks/use-style-config";
import { LoadingDots } from "./LoadingDots";

export type ButtonProps = ButtonPrimitiveProps & {
  styleConfig?: any;
  isWaiting: boolean;
  [k: string]: any;
};

export const Button = React.forwardRef<HTMLSpanElement, ButtonProps>(
  ({ children, disabled, isWaiting, sx, ...props }, forwardedRef: any) => {
    const { styleConfig, getPartStates } = useStyleConfig("Button", props);
    const button = getPartStates("button");

    return (
      <ButtonPrimitive
        {...props}
        ref={forwardedRef}
        data-part-id="button"
        disabled={isWaiting}
        sx={{
          ...styleConfig.base.button._normal,
          ...button._common._normal,
          ...button._normal,
          ...(disabled && {
            ...styleConfig.base.button._disabled,
            ...button._common._disabled,
            ...button._disabled,
          }),
          ...(isWaiting && {
            ...styleConfig.base.button._isWaiting,
            ...button._common._isWaiting,
            ...button._isWaiting,
          }),
          ...(disabled !== true &&
            isWaiting !== true && {
              ":hover": {
                ...styleConfig.base.button._hover,
                ...button._common._hover,
                ...button._hover,
              },
              ":focus": {
                ...styleConfig.base.button._focus,
                ...button._common._focus,
                ...button._focus,
              },
            }),
          ...sx,
        }}
      >
        {isWaiting ? <LoadingDots /> : children}
      </ButtonPrimitive>
    );
  }
);

Button.defaultProps = {
  styleConfig: {},
  disabled: false,
  isWaiting: false,
};
