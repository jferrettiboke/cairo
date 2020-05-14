import React from "react";
import { Box, CodeBlock } from "../";

export default {
  title: "Components/CodeBlock",
  component: CodeBlock,
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

export const Default = () => (
  <CodeBlock language="jsx">{`
import React from "react";

// Hello component
export default function Hello({ name }) {
  return <div>Hello {name}</div>;
}`}</CodeBlock>
);
