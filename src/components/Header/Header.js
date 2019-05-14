import React from "react";
import { Hero, Container, Title } from "rbx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Hero color="danger" className="header">
      <Hero.Body>
        <Container>
          <Title style={{ fontSize: "4rem" }}>
            <Link to="/" className="main-title">
              MARVEL CHARACTERS
            </Link>
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
