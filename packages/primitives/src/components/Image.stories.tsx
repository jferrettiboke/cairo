import React from "react";
import { Box, Image } from "../";

export default {
  title: "Components/Image",
  component: Image,
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
  <Image
    src="https://images.unsplash.com/photo-1586870512049-e9dff097d000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    alt="..."
    sx={{ width: 400 }}
  />
);
