import React from "react";
import { TextareaProps as TextareaPrimitiveProps } from "theme-ui";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export type TextareaProps = TextareaPrimitiveProps & {
  disabled?: boolean;
  styleConfig?: any;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ disabled, sx, ...props }: any, ref: any) => {
    const { styleConfig, getPartStates } = useStyleConfig("Textarea", props);
    const textarea = getPartStates("textarea");

    return (
      <Box
        {...props}
        as="textarea"
        ref={ref}
        data-part-id="textarea"
        disabled={disabled}
        sx={{
          display: "block",
          fontFamily: "inherit",
          fontSize: "inherit",
          width: "100%",
          ...styleConfig?.base?.textarea?._normal,
          ...textarea?._common?._normal,
          ...textarea?._normal,
          ...(disabled && {
            cursor: "not-allowed",
            ...styleConfig?.base?.textarea?._disabled,
            ...textarea?._common?._disabled,
            ...textarea?._disabled,
          }),
          ...(disabled !== true && {
            ":hover": {
              ...styleConfig?.base?.textarea?._hover,
              ...textarea?._common?._hover,
              ...textarea?._hover,
            },
            ":focus": {
              outline: "none",
              ...styleConfig?.base?.textarea?._focus,
              ...textarea?._common?._focus,
              ...textarea?._focus,
            },
          }),
          ...sx,
        }}
      />
    );
  }
);

Textarea.defaultProps = {
  disabled: false,
  styleConfig: {},
};
