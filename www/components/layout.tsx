import Header from "./header";
import Aside from "./aside";
import { Container, Box } from "./generated";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <Box as="main" sx={{ display: "flex" }}>
          <Aside />
          <Box sx={{ width: `${(9 / 12) * 100}%` }}>{children}</Box>
        </Box>
      </Container>
    </>
  );
}
