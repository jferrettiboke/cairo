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

const defaultProps = {
  sx: {
    my: "10"
  }
};

storiesOf("Components/Notification", module)
  .addDecorator(CenterDecorator)
  .add("variants", () => (
    <>
      <Notification {...defaultProps}>Default</Notification>
      <Notification variant="success" {...defaultProps}>
        Success!
      </Notification>
      <Notification variant="error" {...defaultProps}>
        Error!
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
            block
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
                    <Button variant="primary" size="sm">
                      Action
                    </Button>
                  </Box>
                )
              })
            }
          >
            Show message
          </Button>
          <Button
            block
            sx={{ m: "3" }}
            onClick={() =>
              toaster.add({
                variant: "success",
                content: "Great! You just set up your new account."
              })
            }
          >
            Show success
          </Button>
          <Button
            block
            sx={{ m: "3" }}
            onClick={() =>
              toaster.add({
                variant: "error",
                content: "Opss! Something went wrong."
              })
            }
          >
            Show error
          </Button>
        </>
      );
    }
    return <ToasterExample />;
  });
