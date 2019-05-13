import React, { Component } from "react";
import "./App.css";

import CharactersList from "../CharactersList";
import Loader from "../Loader";

import { getCharacters } from "../../utils/API_calls";

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
