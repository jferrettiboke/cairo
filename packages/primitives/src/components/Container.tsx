import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Container = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Container", props);
  //   const container = getPartStates("container");

  return (
    <Box
      {...props}
      ref={ref}
      data-part-id="container"
      sx={{
        mx: "auto",
        maxWidth: ["100%", "640px", "768px", "1024px", "1280px"],
        px: "15px",
        ...sx,
      }}
    />
  );
});

Container.defaultProps = {};
