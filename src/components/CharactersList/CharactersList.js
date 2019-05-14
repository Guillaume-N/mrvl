import React from "react";
import { Column } from "rbx";

import Character from "./Character";

function CharactersList(props) {
  return (
    <Column.Group
      className="characters-list"
      multiline
      style={{ margin: "20px" }}
    >
      {props.characters.map(c => (
        // <Hero product={hero} key={hero.id} />
        <Character character={c} key={c.id} />
      ))}
    </Column.Group>
  );
}

export default CharactersList;
