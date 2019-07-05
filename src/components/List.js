/** @jsx jsx */
import { jsx } from "theme-ui";

export function List({ sx, ...rest }) {
  return (
    <ul
      sx={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        width: "full",
        "& > li": {
          borderTop: "1px solid",
          borderColor: "gray.300",
          p: "3"
        },
        "& > li:last-child": {
          borderBottom: "1px solid",
          borderColor: "gray.300"
        }
      }}
      {...rest}
    />
  );
}

export function ListItem({ sx, ...rest }) {
  return (
    <li
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
      {...rest}
    />
  );
}
