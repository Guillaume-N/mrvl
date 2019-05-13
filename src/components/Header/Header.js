import React from "react";
import { Hero, Container, Title } from "rbx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Hero color="dark">
      <Hero.Body>
        <Container>
          <Title>
            <Link to="/">Marvel Characters</Link>
          </Title>
          <Title as="h2" subtitle>
            All your favorites Marvel characters in one place
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Header;
