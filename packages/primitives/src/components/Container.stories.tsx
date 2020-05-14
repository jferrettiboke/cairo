import React from "react";
import { Box, Container } from "../";

export default {
  title: "Components/Container",
  component: Container,
  decorators: [
    (storyFn: any) => (
      <Box
        sx={{
          mt: "50vh",
        }}
      >
        {storyFn()}
      </Box>
    ),
  ],
};

export const Default = () => (
  <Container sx={{ bg: "black" }}>
    <Box sx={{ bg: "pink" }}>Hi there!</Box>
  </Container>
);
