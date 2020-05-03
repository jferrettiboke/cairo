import React from "react";
import {
  Button as ButtonPrimitive,
  ButtonProps as ButtonPrimitiveProps,
} from "theme-ui";
import useStyleConfig from "../hooks/use-style-config";
import { LoadingDots } from "./LoadingDots";

export type ButtonProps = ButtonPrimitiveProps & {
  disabled?: boolean;
  waiting?: boolean;
  styleConfig?: any;
  whenWaiting?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLSpanElement, ButtonProps>(
  (
    { children, disabled, waiting, whenWaiting, sx, ...props },
    forwardedRef: any
  ) => {
    const { styleConfig, getPartStates } = useStyleConfig("Button", props);
    const button = getPartStates("button");

    return (
      <ButtonPrimitive
        {...props}
        ref={forwardedRef}
        data-part-id="button"
        disabled={disabled || waiting}
        sx={{
          cursor: "pointer",
          ...styleConfig?.base?.button?._normal,
          ...button?._common?._normal,
          ...button?._normal,
          ...(disabled && {
            cursor: "not-allowed",
            ...styleConfig?.base?.button?._disabled,
            ...button?._common?._disabled,
            ...button?._disabled,
          }),
          ...(waiting && {
            cursor: "default",
            ...styleConfig?.base?.button?._waiting,
            ...button?._common?._waiting,
            ...button?._waiting,
          }),
          ...(disabled !== true &&
            waiting !== true && {
              ":hover": {
                ...styleConfig?.base?.button?._hover,
                ...button?._common?._hover,
                ...button?._hover,
              },
              ":focus": {
                outline: "none",
                ...styleConfig?.base?.button?._focus,
                ...button?._common?._focus,
                ...button?._focus,
              },
            }),
          ...sx,
        }}
      >
        {waiting ? whenWaiting || <LoadingDots /> : children}
      </ButtonPrimitive>
    );
  }
);

Button.defaultProps = {
  styleConfig: {},
  disabled: false,
  waiting: false,
};
