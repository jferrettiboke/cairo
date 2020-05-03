import React from "react";
// @ts-ignore
import Prism from "@theme-ui/prism";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const CodeBlock = React.forwardRef(
  ({ language, children, sx, ...props }: any, ref: any) => {
    //   const { styleConfig, getPartStates } = useStyleConfig("CodeBlock", props);
    //   const codeBlock = getPartStates("code-block");

    return (
      <Box
        {...props}
        ref={ref}
        data-part-id="code-block"
        sx={{
          "& > pre": {
            p: "20px",
            borderRadius: "5px",
            border: "1px solid #eee",

            ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
              color: "#aaa",
            },
            ".comment": {
              fontStyle: "italic",
              color: "green",
            },
            ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable": {
              color: "black",
            },
            ".atrule, .attr-value, .keyword": {
              color: "orange",
            },
            ".selector, .attr-name, .string, .char, .builtin, .inserted": {
              color: "blue",
            },
          },
          ...sx,
        }}
      >
        <Prism className={language}>{children}</Prism>
      </Box>
    );
  }
);

CodeBlock.defaultProps = {};
