import React from "react";
import { Box, Skeleton } from "../";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
};

export const Default = () => (
  <Box sx={{ "& > * + *": { my: "10px" } }}>
    <Skeleton
      sx={{ height: "100px", width: "100px", borderRadius: "9999px" }}
    />
    <Skeleton sx={{ height: "30px", width: "500px" }} />
    <Skeleton sx={{ height: "60px", width: "500px" }} />
  </Box>
);
