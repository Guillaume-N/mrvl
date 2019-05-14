import React, { Component } from "react";
import { getCharacterDetails } from "../../utils/API_calls";
import { Column, Title, Section, Notification } from "rbx";
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
      <Column.Group multiline className="column-group">
        <Column size={12}>
          <Breadcrumb text={character.name} />
        </Column>
        <Column size="two-thirds">
          <Notification className="box-character">
            <Title as="h2" size={2} className="details-main-title">
              {character.name}
            </Title>
            <div className="character-image-container">
              <img
                className="character-image"
                src={imgUrl}
                alt={character.name}
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
              <Title as="h2" size={2} className="details-main-title">
                Featured in:
              </Title>
              <Title as="h5" size={5}>
                {character.name} appears in{" "}
                <span className="number-of-comics">
                  {character.comics.available}
                </span>{" "}
                comics.
              </Title>
              {character.comics.items.length > 0 && (
                <>
                  <Title as="h6" size={6}>
                    The first 3 comics he appears in are:
                  </Title>
                  <ul className="comics-list">
                    {character.comics.items.slice(0, 3).map(comic => {
                      return <li key={comic.name}>{comic.name}</li>;
                    })}
                  </ul>
                </>
              )}
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
