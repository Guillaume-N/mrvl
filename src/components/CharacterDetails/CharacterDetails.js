import React, { Component } from "react";
import { getCharacterDetails } from "../../utils/API_calls";
import { Column, Title, Section, Notification } from "rbx";
import Loader from "../Loader";
import Breadcrumb from "../Breadcrumb";

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
      <Column.Group multiline style={{ margin: "10px" }}>
        <Column size={12}>
          <Breadcrumb text={character.name} />
        </Column>
        <Column size="two-thirds">
          <Notification className="box-character">
            <Title as="h1" size={3} spaced style={{ color: "#FFC107" }}>
              {character.name}
            </Title>
            <div
              style={{
                margin: "0 auto",
                textAlign: "center"
              }}
            >
              <img
                src={imgUrl}
                alt={character.name}
                style={{ borderRadius: "10px" }}
              />
            </div>
            {character.description && (
              <Section>{character.description}</Section>
            )}
          </Notification>
        </Column>
        {character.comics && (
          <Column>
            <Notification className="box-character-comics">
              <Title as="h3" size={3} style={{ color: "#FFC107" }}>
                Featured in:
              </Title>
              <Title as="h5" size={5}>
                {character.name} appears in{" "}
                <span style={{ color: "#FFC107" }}>
                  {character.comics.available}
                </span>{" "}
                comics.
              </Title>
              <Title as="h6" size={6}>
                The first 3 comics he appears in are:
              </Title>
              <ul className="comics-list">
                {character.comics.items.slice(0, 3).map(comic => {
                  return <li key={comic.name}>{comic.name}</li>;
                })}
              </ul>
            </Notification>
          </Column>
        )}
      </Column.Group>
    ) : (
      <Loader />
    );
  }
}

export default CharacterDetails;
