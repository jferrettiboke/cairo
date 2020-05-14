import React, { useState } from "react";
import { Checkbox, Box } from "../";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
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

export const Default = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <Box sx={{ "& > *": { m: "20px !important" } }}>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      <Checkbox
        checked={checked2}
        onChange={() => {
          setChecked2(!checked2);
        }}
      />
    </Box>
  );
};
