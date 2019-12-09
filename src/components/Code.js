import React from "react";
import Prism from "@theme-ui/prism";

import Box from "./Box";

export default function Code({ language, ...rest }) {
  return (
    <Box
      sx={{
        "& > pre": {
          p: "5",
          borderRadius: "lg",
          border: "1px solid",
          borderColor: "divider",

          ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
            color: "gray.500"
          },
          ".comment": {
            fontStyle: "italic"
          },
          ".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable": {
            color: "text"
          },
          ".atrule, .attr-value, .keyword": {
            color: "warning.default"
          },
          ".selector, .attr-name, .string, .char, .builtin, .inserted": {
            color: "success.default"
          }
        }
      }}
    >
      <Prism className={language} {...rest} />
    </Box>
  );
}
