import React from "react";
import { Link, Box } from "../";

export default {
  title: "Components/Link",
  component: Link,
};

export const Default = () => (
  <Box sx={{ '& > [data-part-id="link"]': { mr: "20px" } }}>
    <Link href="#" title="Hi there!">
      Ghost
    </Link>
    <Link href="#" title="Hi there!" variant="color">
      Underline
    </Link>
  </Box>
);
