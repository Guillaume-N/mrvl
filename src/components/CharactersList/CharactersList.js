import React, { Component } from "react";
import { Column } from "rbx";
import { getCharacters } from "../../utils/API_calls";
import Character from "./Character";
import Loader from "../Loader";
import "./CharactersList.css";

class CharactersList extends Component {
  state = {
    characters: [],
    loaded: false
  };

  componentDidMount() {
    getCharacters("name", 20, 100).then(characters => {
      this.setState({
        characters,
        loaded: true
      });
    });

    document.title = "Marvel Characters";
  }

  render() {
    return this.state.loaded ? (
      <Column.Group className="characters-list" multiline>
        {this.state.characters.map(character => (
          <Character character={character} key={character.id} />
        ))}
      </Column.Group>
    ) : (
      <Loader />
    );
  }
}

export default CharactersList;
