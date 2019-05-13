import React from "react";
import { Column, Section, Title } from "rbx";

import { Link } from "react-router-dom";

const Character = props => {
  const character = props.character;
  const imgUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <Column size={3} className="character">
      <Link to={`/character/${character.id}`}>
        <Section
          className="toto"
          backgroundColor="dark"
          textAlign="centered"
          style={{
            padding: "1rem",
            color: "white",
            borderRadius: "2px",
            opacity: "1"
          }}
        >
          <Title size={4} style={{ color: "white" }}>
            {character.name}
          </Title>
          <div style={{ margin: "0px auto" }}>
            <img src={imgUrl} alt={character.name} />
          </div>
          <p>{character.description}</p>
        </Section>
      </Link>
    </Column>
  );
};

export default Character;
