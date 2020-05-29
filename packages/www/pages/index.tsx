import Link from "next/link";
import Header from "../components/header";
import { Box, Button, Text } from "../components/generated";

export default function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          my: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          sx={{
            color: "primary",
            mb: "50px",
            fontSize: "1.5em",
          }}
        >
          C A I R O
        </Text>
        <Text as="h1" sx={{ textAlign: "center" }}>
          Next-gen UI Framework.
          <br />
          Get more done by doing less.
        </Text>
        <Box sx={{ my: "20px" }} />
        <Link href="/docs">
          <Button>Get started</Button>
        </Link>
      </Box>
    </>
  );
}
