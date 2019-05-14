import React from "react";
import { Column } from "rbx";
import Character from "./Character";
import "./CharactersList.css";

function CharactersList(props) {
  return (
    <Column.Group className="characters-list" multiline>
      {props.characters.map(character => (
        <Character character={character} key={character.id} />
      ))}
    </Column.Group>
  );
}

export default CharactersList;
