import React from "react";
import Box from "./Box";

export function List({ sx, ...rest }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        width: "full",
        "& > li": {
          borderTop: "1px solid",
          borderColor: "divider",
          p: "3",
          px: "5"
        },
        "& > li:last-child": {
          borderBottom: "1px solid",
          borderColor: "divider"
        }
      }}
      {...rest}
    />
  );
}

export function ListItem({ sx, ...rest }) {
  return (
    <Box
      as="li"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
      {...rest}
    />
  );
}
