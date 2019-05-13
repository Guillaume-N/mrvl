import React, { Component } from "react";
import { getCharacterDetails } from "../../utils/API_calls";

class CharacterDetails extends Component {
  state = {
    character: {}
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getCharacterDetails(id).then(character => {
      this.setState({ character });
      document.title = character.name;
    });
  }

  render() {
    const character = this.state.character;

    const imgUrl =
      character &&
      character.thumbnail &&
      `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return (
      <div className="character-details">
        {character && (
          <>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
            <p>
              <img src={imgUrl} alt={character.name} />
            </p>
            {character.comics && (
              <div>
                <p>
                  {character.name} appears in {character.comics.available}{" "}
                  comics.
                </p>
                <p>The first 3 comics he appears in are:</p>
                <ul>
                  {character.comics.items.slice(0, 3).map(comic => {
                    return <li key={comic.name}>{comic.name}</li>;
                  })}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default CharacterDetails;
