import React from "react";
import { Hero, Container, Title } from "rbx";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Hero color="danger" className="header">
      <Hero.Body>
        <Container>
          <Title className="main-title">
            <Link to="/">MARVEL CHARACTERS</Link>
          </Title>
          <Title as="h2" subtitle className="subtitle">
            All your favorites Marvel characters in one place
          </Title>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Header;
