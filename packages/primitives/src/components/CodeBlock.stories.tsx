import React from "react";
import { CodeBlock } from "../";

export default {
  title: "Components/CodeBlock",
  component: CodeBlock,
};

export const Default = () => (
  <CodeBlock language="jsx">{`
import React from "react";

// Hello component
export default function Hello({ name }) {
  return <div>Hello {name}</div>;
}`}</CodeBlock>
);
