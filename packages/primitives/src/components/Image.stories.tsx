import React from "react";
import { Image } from "../";

export default {
  title: "Components/Image",
  component: Image,
};

export const Default = () => (
  <Image
    src="https://images.unsplash.com/photo-1586870512049-e9dff097d000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    alt="..."
    sx={{ width: 400 }}
  />
);
