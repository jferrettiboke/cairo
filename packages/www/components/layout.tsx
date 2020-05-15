import Header from "./header";
import Aside from "./aside";
import { Container, Box, Text } from "./generated";

export default function Layout({ children }) {
  return (
    <Container>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          variant="h1"
          sx={{
            color: "success.default",
            mb: "50px",
            fontSize: "1.5em",
          }}
        >
          C A I R O
        </Text>
        <Text variant="h1">Next-generation UI Framework.</Text>
        <Text variant="h1">Get more, doing less.</Text>
      </Box>
      <Header />
      <Box as="main" sx={{ display: "flex" }}>
        <Aside />
        <Box sx={{ width: `${(9 / 12) * 100}%` }}>{children}</Box>
      </Box>
    </Container>
  );
}
