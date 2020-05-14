import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "../";

export default {
  title: "Components/Table",
  component: Table,
  decorators: [
    (storyFn: any) => (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {storyFn()}
      </Box>
    ),
  ],
};

export const Default = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Something</Th>
        <Th>Something</Th>
        <Th>Something</Th>
      </Tr>
    </Thead>
    <Tbody>
      {[0, 1, 2].map((i) => (
        <Tr key={i}>
          <Td>Something</Td>
          <Td>Something</Td>
          <Td>Something</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);
