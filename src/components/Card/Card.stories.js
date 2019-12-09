import React from "react";
import { storiesOf } from "@storybook/react";
import { FaAngleRight } from "react-icons/fa";

import Box from "../Box";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Button from "../Button";
import Image from "../Image";
import { List, ListItem } from "../List";
import ToggleSwitch from "../forms/ToggleSwitch";
import * as Card from ".";

function CenterDecorator(storyFn) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: ["100%", "75%", "50%"],
        mx: "auto",
        pb: 50
      }}
    >
      {storyFn()}
    </Box>
  );
}

storiesOf("Labs/Card", module)
  .addDecorator(CenterDecorator)
  .add("default", () => (
    <Card.Card>
      <Card.Header>
        <Card.Content>
          <Heading as="h3">About your information</Heading>
        </Card.Content>
      </Card.Header>
      <Card.Content>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Card.Content>
      <Image
        src="https://images.unsplash.com/photo-1559160582-eab6966b680f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        alt="..."
        sx={{ display: "block", width: "full" }}
      />
      <Card.Content>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Card.Content>
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
            <FaAngleRight />
          </Box>
        </ListItem>
      </List>
      <Card.Content>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
      </Card.Content>
      <Card.Footer>
        <Card.Content sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button kind="secondary">More info</Button>
          <Box sx={{ mx: "1" }} />
          <Button>I understand</Button>
        </Card.Content>
      </Card.Footer>
    </Card.Card>
  ));
