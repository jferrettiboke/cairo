import React from "react";
import { Badge, Box } from "../";

export default {
  title: "Components/Badge",
  component: Badge,
};

export const Default = () => (
  <Box sx={{ '& > [data-part-id="badge"]': { mr: "20px" } }}>
    <Badge>1</Badge>
    <Badge>5</Badge>
    <Badge>50</Badge>
    <Badge>150</Badge>
    <Badge>New</Badge>
  </Box>
);
