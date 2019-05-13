import React, { Component } from "react";
import { getCharacterDetails } from "../../utils/API_calls";
import { Column, Box, Title, Section } from "rbx";
import Loader from "../Loader";

class CharacterDetails extends Component {
  state = {
    character: {},
    loaded: false
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    getCharacterDetails(id).then(character => {
      console.log(character.comics);
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
      <Column.Group style={{ margin: "10px" }}>
        <Column size={7}>
          <Box>
            <Title as="h1" size={3} spaced>
              {character.name}
            </Title>
            <div
              style={{
                maxHeight: "400px",
                width: "400px",
                margin: "0 auto",
                textAlign: "center"
              }}
            >
              <p>
                <img
                  src={imgUrl}
                  alt={character.name}
                  style={{ borderRadius: "10px" }}
                />
              </p>
            </div>
            <Section>{character.description}</Section>
          </Box>
        </Column>
        {character.comics && (
          <Column size={5}>
            <Box>
              <Title as="h3" size={3}>
                Featured in:
              </Title>
              <Title as="h5" size={5}>
                {character.name} appears in{" "}
                <span style={{ color: "green" }}>
                  {character.comics.available}
                </span>{" "}
                comics.
              </Title>
              <Title as="h6" size={6}>
                The first 3 comics he appears in are:
              </Title>
              <ul>
                {character.comics.items.slice(0, 3).map(comic => {
                  return <li key={comic.name}>{comic.name}</li>;
                })}
              </ul>
            </Box>
          </Column>
        )}
      </Column.Group>
    ) : (
      <Loader />
    );
  }
}

export default CharacterDetails;
