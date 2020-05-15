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
    const { getPartStates } = useStyleConfig("Textarea", props);
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
          ...textarea?._normal,
          ...(disabled && { cursor: "not-allowed", ...textarea?._disabled }),
          ...(disabled !== true && {
            ":hover": { ...textarea?._hover },
            ":focus": { outline: "none", ...textarea?._focus },
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
