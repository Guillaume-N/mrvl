import React from "react";
import { Column, Section, Title } from "rbx";
import { Link } from "react-router-dom";
import "./Character.css";

const Character = props => {
  const character = props.character;
  const imgUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <Column size={3}>
      <Link to={`/character/${character.id}`}>
        <Section className="character">
          <Title size={3} className="character-name">
            {character.name}
          </Title>
          <div className="character-list-image-container">
            <img
              className="character-list-image"
              src={imgUrl}
              alt={character.name}
            />
          </div>
        </Section>
      </Link>
    </Column>
  );
};

export default Character;
