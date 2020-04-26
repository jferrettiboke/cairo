import React from "react";
import { Container, Box } from "../";

export default {
  title: "Components/Container",
  component: Container,
};

export const Default = () => (
  <Container>
    <Box sx={{ bg: "pink" }}>Hi there!</Box>
  </Container>
);
