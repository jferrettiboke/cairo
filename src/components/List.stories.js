import React from "react";
import { storiesOf } from "@storybook/react";

import Box from "./Box";
import ToggleSwitch from "./forms/ToggleSwitch";
import { List, ListItem } from "./List";

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
      {storyFn()}
    </Box>
  );
}

storiesOf("Components/List", module)
  .addDecorator(CenterDecorator)
  .add("default", () => (
    <List>
      <ListItem>
        <Box>
          <Box>Notifications</Box>
          <Box sx={{ fontSize: "xs" }}>Emails, SMS, messages...</Box>
        </Box>
        <ToggleSwitch />
      </ListItem>
      <ListItem>
        Emails
        <ToggleSwitch checked />
      </ListItem>
      <ListItem>
        Messages
        <Box sx={{ fontWeight: "bold", color: "gray.400", fontSize: "xl" }}>
          >
        </Box>
      </ListItem>
    </List>
  ));
