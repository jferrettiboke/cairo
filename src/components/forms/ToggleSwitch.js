import React from "react";
import { useThemeUI } from "theme-ui";

import Box from "../Box";

export default function ToggleSwitch({ checked, ...rest }) {
  const { theme } = useThemeUI();
  return (
    <Box
      as="label"
      sx={{
        position: "relative",
        display: "inline-block",
        width: "35px",
        height: "20px",
        "& > input": {
          opacity: 0,
          width: 0,
          height: 0
        },
        "& > span": {
          // Theme
          backgroundColor: "gray.300",
          // Raw
          position: "absolute",
          cursor: "pointer",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // WebkitTransition: ".4s",
          transition: ".4s",
          borderRadius: 9999
        },
        "& > span:before": {
          // Raw
          position: "absolute",
          content: '""',
          height: 3,
          width: 3,
          left: 1,
          bottom: 1,
          backgroundColor: "white",
          WebkitTransition: ".4s",
          transition: ".4s",
          borderRadius: "50%"
          // Theme
          // boxShadow: theme => `0 0 2px ${theme.colors.black}`
        },
        "& > input:checked + span": {
          // Theme
          backgroundColor: "success.default"
        },
        "& > input:focus + span": {
          // boxShadow: "0 0 1px #2196F3"
        },
        "& > input:checked + span:before": {
          // WebkitTransform: "translateX(22px)",
          // msTransform: "translateX(22px)",
          transform: "translateX(15px)"
        }
      }}
    >
      <Box as="input" type="checkbox" checked={checked} {...rest} />
      <Box as="span" />
    </Box>
  );
}
