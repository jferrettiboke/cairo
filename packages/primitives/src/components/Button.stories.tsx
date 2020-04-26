import React from "react";
import { Button, Box } from "../";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Button>Action</Button>
    <Button size="small">Action</Button>
  </Box>
);

export const Secondary = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Button variant="secondary">Action</Button>
    <Button variant="secondary" size="small">
      Action
    </Button>
  </Box>
);

export const Disabled = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Button disabled>Default</Button>
    <Button size="small" disabled>
      Default
    </Button>
    <Button variant="secondary" disabled>
      Secondary
    </Button>
    <Button variant="secondary" size="small" disabled>
      Secondary
    </Button>
  </Box>
);

export const Loading = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Button isWaiting>Default</Button>
    <Button size="small" isWaiting>
      Default
    </Button>
    <Button variant="secondary" isWaiting>
      Secondary
    </Button>
    <Button variant="secondary" size="small" isWaiting>
      Secondary
    </Button>
  </Box>
);

export const Ghost = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Box>
      <Button variant="ghost">Action</Button>
    </Box>
    <Box>
      <Button variant="ghost" size="small">
        Action
      </Button>
    </Box>
  </Box>
);

export const Success = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Button variant="success">Action</Button>
    <Button variant="success" size="small">
      Action
    </Button>
  </Box>
);

export const Error = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Button variant="error">Action</Button>
    <Button variant="error" size="small">
      Action
    </Button>
  </Box>
);

export const Warning = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Button variant="warning">Action</Button>
    <Button variant="warning" size="small">
      Action
    </Button>
  </Box>
);

export const Sizes = () => (
  <Box sx={{ '& > [data-part-id="button"]': { m: "20px" } }}>
    <Button size="large">Action</Button>
    <Button size="medium">Action</Button>
    <Button size="small">Action</Button>
  </Box>
);
