import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import Button from "./Button";
import Notification from "./Notification";
import useToaster from "../useToaster";

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
      <Box sx={{ width: "1/3" }}>{storyFn()}</Box>
    </Box>
  );
}

storiesOf("Components/Notification", module)
  .addDecorator(CenterDecorator)
  .add("kinds", () => (
    <>
      <Notification sx={{ m: 2 }}>Default</Notification>
      <Notification kind="success" sx={{ m: 2 }}>
        Success
      </Notification>
      <Notification kind="error" sx={{ m: 2 }}>
        Error
      </Notification>
      <Notification kind="warning" sx={{ m: 2 }}>
        Warning
      </Notification>
    </>
  ))
  .add("with useToaster", () => {
    function ToasterExample() {
      const { Toaster, ...toaster } = useToaster();
      return (
        <>
          <Toaster />
          <Button
            sx={{ m: "3" }}
            onClick={() =>
              toaster.add({
                content: (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <Box>Hello world</Box>
                    <Button size="sm">Action</Button>
                  </Box>
                )
              })
            }
          >
            Show message
          </Button>
          <Button
            sx={{ m: "3" }}
            onClick={() =>
              toaster.add({
                kind: "success",
                content: "Great! You just set up your new account."
              })
            }
          >
            Show success
          </Button>
          <Button
            sx={{ m: "3" }}
            onClick={() =>
              toaster.add({
                kind: "error",
                content: "Opss! Something went wrong."
              })
            }
          >
            Show error
          </Button>
          <Button
            sx={{ m: "3" }}
            onClick={() =>
              toaster.add({
                kind: "warning",
                content: "Warning!"
              })
            }
          >
            Show warning
          </Button>
        </>
      );
    }
    return <ToasterExample />;
  });
