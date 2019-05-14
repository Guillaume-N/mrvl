import React, { Component } from "react";
import { getCharacterDetails } from "../../utils/API_calls";
import { Column } from "rbx";
import CharacterImageAndDescription from "./CharacterImageAndDescription";
import CharacterComics from "./CharacterComics";
import Loader from "../Loader";
import Breadcrumb from "../Breadcrumb";
import "./CharacterDetails.css";

class CharacterDetails extends Component {
  state = {
    character: {},
    loaded: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getCharacterDetails(id).then(character => {
      this.setState({ character, loaded: true });
      document.title = character.name;
    });
  }

  render() {
    const character = this.state.character;

    const imgUrl =
      character &&
      character.thumbnail &&
      `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return this.state.loaded ? (
      <Column.Group multiline className="column-group">
        <Breadcrumb text={character.name} />
        <CharacterImageAndDescription character={character} imgUrl={imgUrl} />
        {character.comics && <CharacterComics character={character} />}
      </Column.Group>
    ) : (
      <Loader />
    );
  }
}

export default CharacterDetails;
