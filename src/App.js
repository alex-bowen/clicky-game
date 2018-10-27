import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Counter from "./components/Counter";
import characters from "./characters.json";

import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  handleClick = id => {

    console.log(id)
  
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Parks &amp; Rec Clicky Game!
          <hr />
          <p className="p">Don't click on anyone twice! Click on any character to begin. Characters will shuffle after each click.</p>
          <br />
          <Counter />
        </Title>
        {this.state.characters.map(character => (
          <CharacterCard
            id={this.id}
            image={character.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
