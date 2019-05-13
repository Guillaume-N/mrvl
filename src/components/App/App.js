import React, { Component } from "react";
import "./App.css";

import CharactersList from "../CharactersList";

import { getCharacters } from "../../utils/API_calls";

class App extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    getCharacters("name", 20, 100).then(characters => {
      this.setState({
        characters
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.characters && (
          <CharactersList characters={this.state.characters} />
        )}
      </div>
    );
  }
}

export default App;
