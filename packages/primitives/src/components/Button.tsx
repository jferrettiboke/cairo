import React from "react";
import {
  Button as ButtonPrimitive,
  ButtonProps as ButtonPrimitiveProps,
} from "theme-ui";
import useStyleConfig from "../hooks/use-style-config";
import { LoadingDots } from "./LoadingDots";

export type ButtonProps = ButtonPrimitiveProps & {
  disabled?: boolean;
  styleConfig?: any;
  waiting?: boolean;
  whenWaiting?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, disabled, sx, waiting, whenWaiting, ...props },
    forwardedRef: any
  ) => {
    const { getPartStates } = useStyleConfig("Button", props);
    const button = getPartStates("button");

    return (
      <ButtonPrimitive
        {...props}
        ref={forwardedRef}
        data-part-id="button"
        disabled={disabled || waiting}
        sx={{
          cursor: "pointer",
          ...button?._normal,
          ...(disabled && { cursor: "not-allowed", ...button?._disabled }),
          ...(waiting && { cursor: "default", ...button?._waiting }),
          ...(disabled !== true &&
            waiting !== true && {
              ":hover": { ...button?._hover },
              ":focus": { outline: "none", ...button?._focus },
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
  disabled: false,
  styleConfig: {},
  waiting: false,
};
