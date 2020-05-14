import React from "react";
import { Box, Select, SelectOption } from "../";

export default {
  title: "Components/Select",
  component: Select,
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
        <Box
          sx={{
            width: ["100%", "75%", "50%"],
            "& > *": { mb: "20px !important" },
          }}
        >
          {storyFn()}
        </Box>
      </Box>
    ),
  ],
};

export const Default = () => (
  <>
    <Select>
      <SelectOption value="" />
      <SelectOption value="option_1">Option 1</SelectOption>
      <SelectOption value="option_2">Option 2</SelectOption>
      <SelectOption value="option_3">Option 3</SelectOption>
    </Select>

    <Select>
      <SelectOption>Select an option</SelectOption>
      <SelectOption value="option_1">Option 1</SelectOption>
      <SelectOption value="option_2">Option 2</SelectOption>
      <SelectOption value="option_3">Option 3</SelectOption>
    </Select>

    <Select defaultValue="option_2">
      <SelectOption value="" />
      <SelectOption value="option_1">Option 1</SelectOption>
      <SelectOption value="option_2">Option 2</SelectOption>
      <SelectOption value="option_3">Option 3</SelectOption>
    </Select>

    <Select defaultValue="option_2" disabled>
      <SelectOption value="" />
      <SelectOption value="option_1">Option 1</SelectOption>
      <SelectOption value="option_2">Option 2</SelectOption>
      <SelectOption value="option_3">Option 3</SelectOption>
    </Select>
  </>
);
