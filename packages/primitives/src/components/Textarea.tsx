import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Textarea = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Textarea", props);
  //   const textarea = getPartStates("textarea");

  return (
    <Box
      as="textarea"
      {...props}
      ref={ref}
      data-part-id="textarea"
      sx={{ ...sx }}
    />
  );
});

Textarea.defaultProps = {};
