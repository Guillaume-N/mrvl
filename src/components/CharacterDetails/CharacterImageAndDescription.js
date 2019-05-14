import React from "react";
import { Column, Notification, Title, Section } from "rbx";

function CharacterImageAndDescription(props) {
  return (
    <Column size="two-thirds">
      <Notification className="box-character">
        <Title as="h2" size={2} className="details-main-title">
          {props.character.name}
        </Title>
        <div className="character-image-container">
          <img
            className="character-image"
            src={props.imgUrl}
            alt={props.character.name}
          />
        </div>
        {props.character.description && (
          <Section>{props.character.description}</Section>
        )}
      </Notification>
    </Column>
  );
}

export default CharacterImageAndDescription;
