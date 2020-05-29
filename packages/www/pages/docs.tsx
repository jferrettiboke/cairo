import Layout from "../components/layout";
import { Button, Text } from "../components/generated";

export default function Docs() {
  return (
    <Layout>
      <Text as="h1">Heading 1</Text>
      <Text as="h2">Heading 2</Text>
      <Text as="h3">Heading 3</Text>
      <Text as="h4">Heading 4</Text>
      <Text as="h5">Heading 5</Text>
      <Text as="h6">Heading 6</Text>
      <Button>Submit</Button>
    </Layout>
  );
}
