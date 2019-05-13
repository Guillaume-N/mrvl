import React from "react";
import { Column, Notification, Title } from "rbx";

import { Link } from "react-router-dom";

const Character = props => {
  const character = props.character;
  const imgUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  return (
    <Column size={3}>
      <Link to={`/character/${character.id}`}>
        <Notification color="dark" textAlign="centered">
          <Title size={4}>{character.name}</Title>
          <p>
            <img src={imgUrl} alt={character.name} />
          </p>
          <p>{character.description}</p>
        </Notification>
      </Link>
    </Column>
  );
};

export default Character;
