import React from "react";
import NativeLink from "next/link";
import { Box, Container, Link } from "./generated";

function StyledLink(props) {
  return (
    <Link
      sx={{
        fontWeight: "bold",
        textDecoration: "none",
        ":hover": { color: "primary" },
      }}
      {...props}
    />
  );
}

function NavLink({ href, children, target = null }) {
  if (target === "_blank") {
    return (
      <StyledLink href={href} target={target}>
        {children}
      </StyledLink>
    );
  }

  return (
    <NativeLink href={href}>
      <StyledLink>{children}</StyledLink>
    </NativeLink>
  );
}

export default function Header() {
  return (
    <Box as="header" sx={{ borderBottom: "1px solid #eee" }}>
      <Container>
        <Box
          as="nav"
          sx={{
            py: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink href="/">Cairo</NavLink>
          <NavLink href="/#features">Features</NavLink>
          <NavLink href="/docs">Docs</NavLink>
          <NavLink
            href="https://github.com/jferrettiboke/cairo"
            target="_blank"
          >
            GitHub
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
}
