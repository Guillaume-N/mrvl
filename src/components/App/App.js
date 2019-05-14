import React, { Component } from "react";
import { getCharacters } from "../../utils/API_calls";
import CharactersList from "../CharactersList";
import Loader from "../Loader";

class App extends Component {
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
    return (
      <div className="App">
        {this.state.loaded ? (
          <CharactersList characters={this.state.characters} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default App;
