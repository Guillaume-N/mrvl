import React from "react";
import PropTypes from "prop-types";
import { Column, Notification, Title } from "rbx";

function CharacterComics(props) {
  return (
    <Column>
      <Notification className="box-character-comics">
        <Title as="h2" size={2} className="details-main-title">
          Featured in:
        </Title>
        <Title as="h5" size={5}>
          {props.character.name} appears in{" "}
          <span className="number-of-comics">
            {props.character.comics.available}
          </span>{" "}
          comics.
        </Title>
        {props.character.comics.items.length > 0 && (
          <>
            <Title as="h6" size={6}>
              The first 3 comics he appears in are:
            </Title>
            <ul className="comics-list">
              {props.character.comics.items.slice(0, 3).map(comic => {
                return <li key={comic.name}>{comic.name}</li>;
              })}
            </ul>
          </>
        )}
      </Notification>
    </Column>
  );
}

CharacterComics.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterComics;
