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
    <Badge uppercase>New</Badge>
  </Box>
);

export const Variants = () => (
  <Box sx={{ '& > [data-part-id="badge"]': { mr: "20px" } }}>
    <Badge variant="success">1</Badge>
    <Badge variant="error">5</Badge>
    <Badge variant="warning">50</Badge>
  </Box>
);

export const Sizes = () => (
  <Box sx={{ '& > [data-part-id="badge"]': { mr: "20px" } }}>
    <Badge variant="success" size="small">
      Small
    </Badge>
    <Badge variant="success">Normal</Badge>
    <Badge variant="success" size="large">
      Large
    </Badge>
  </Box>
);
