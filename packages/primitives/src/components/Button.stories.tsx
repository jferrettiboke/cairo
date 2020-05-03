import React from "react";
import { Button, ButtonProps } from "../";

function MyButton(props: ButtonProps) {
  return <Button whenWaiting="⏳" {...props} />;
}

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => <Button>Action</Button>;

export const Disabled = () => <Button disabled>Action</Button>;

export const Waiting = () => <Button waiting>Action</Button>;

export const WaitingWithCustomRender = () => (
  <MyButton waiting>Submit</MyButton>
);
