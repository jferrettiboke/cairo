import React from "react";
import { Select, SelectOption } from "../";

export default {
  title: "Components/Select",
  component: Select,
};

export const Default = () => (
  <Select>
    <SelectOption>Option 1</SelectOption>
    <SelectOption>Option 2</SelectOption>
    <SelectOption>Option 3</SelectOption>
  </Select>
);
