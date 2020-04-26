import React from "react";
import { Box } from "./Box";
import useStyleConfig from "../hooks/use-style-config";

export const Table = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Table", props);
  //   const table = getPartStates("table");

  return (
    <Box
      as="table"
      {...props}
      ref={ref}
      data-part-id="table"
      sx={{
        boxSizing: "border-box",
        borderCollapse: "collapse",
        width: "100%",
        ...sx,
      }}
    />
  );
});

Table.defaultProps = {};

export const Thead = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Table", props);
  //   const thead = getPartStates("thead");

  return (
    <Box as="thead" {...props} ref={ref} data-part-id="thead" sx={{ ...sx }} />
  );
});

Thead.defaultProps = {};

export const Tbody = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Table", props);
  //   const tbody = getPartStates("tbody");

  return (
    <Box as="tbody" {...props} ref={ref} data-part-id="tbody" sx={{ ...sx }} />
  );
});

Tbody.defaultProps = {};

export const Tr = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Table", props);
  //   const tr = getPartStates("tr");

  return <Box as="tr" {...props} ref={ref} data-part-id="tr" sx={{ ...sx }} />;
});

Tr.defaultProps = {};

export const Th = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Table", props);
  //   const th = getPartStates("th");

  return (
    <Box
      as="th"
      {...props}
      ref={ref}
      data-part-id="th"
      sx={{
        boxSizing: "border-box",
        fontWeight: "normal",
        textAlign: "unset",
        color: "rgb(102, 110, 117)",
        fontSize: "12px",
        fontVariantNumeric: "tabular-nums",
        lineHeight: "25px",
        padding: "10px 15px 10px 0px",
        borderBottom: "1px solid rgb(226, 230, 233)",
        borderColor: "rgb(226, 230, 233)",
        ...sx,
      }}
    />
  );
});

Th.defaultProps = {};

export const Td = React.forwardRef(({ sx, ...props }: any, ref: any) => {
  //   const { styleConfig, getPartStates } = useStyleConfig("Table", props);
  //   const td = getPartStates("td");

  return (
    <Box
      as="td"
      {...props}
      ref={ref}
      data-part-id="td"
      sx={{
        boxSizing: "border-box",
        fontSize: "13px",
        fontVariantNumeric: "tabular-nums",
        lineHeight: "25px",
        padding: "10px 15px 10px 0px",
        borderBottom: "1px solid rgb(226, 230, 233)",
        borderColor: "rgb(226, 230, 233)",
        ...sx,
      }}
    />
  );
});

Td.defaultProps = {};
