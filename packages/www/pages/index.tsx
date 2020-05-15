import Layout from "../components/layout";
import { Button } from "../components/generated";

export default function HomePage() {
  return (
    <Layout>
      <div>
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="error" size="small">
          Error
        </Button>
      </div>
    </Layout>
  );
}
