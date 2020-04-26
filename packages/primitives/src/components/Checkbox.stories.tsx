import React, { useState } from "react";
import { Checkbox, Box } from "../";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <Box sx={{ "& > *": { mr: "20px" } }}>
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
