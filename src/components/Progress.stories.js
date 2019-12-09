import React, { useState, useEffect, useRef } from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Button from "./Button";
import Progress from "./Progress";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function CenterDecorator(storyFn) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box sx={{ width: "1/2" }}>{storyFn()}</Box>
    </Box>
  );
}

storiesOf("Components/Progress", module)
  .addDecorator(CenterDecorator)
  .add("default", () => (
    <>
      <Progress value={0} sx={{ my: "10" }} />
      <Progress value={25} sx={{ my: "10" }} />
      <Progress value={50} sx={{ my: "10" }} />
      <Progress value={75} sx={{ my: "10" }} />
      <Progress value={100} sx={{ my: "10" }} />
    </>
  ))
  .add("animated", () => {
    const [value, setValue] = useState(0);

    useInterval(() => {
      if (value === 100) return;
      setValue(value + 1);
    }, 10);

    return (
      <>
        <Progress value={value} sx={{ my: "10" }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="sm" onClick={() => setValue(0)}>
            Reset
          </Button>
        </Box>
      </>
    );
  });
