import React from "react";
import { Column } from "rbx";
import Character from "./Character";
import "./CharactersList.css";

function CharactersList(props) {
  return (
    <Column.Group className="characters-list" multiline>
      {props.characters.map(c => (
        <Character character={c} key={c.id} />
      ))}
    </Column.Group>
  );
}

export default CharactersList;
