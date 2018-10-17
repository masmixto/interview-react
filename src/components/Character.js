import React, { Component } from 'react';
import CharacterWorld from './CharacterWorld';

class Character extends Component {
  constructor() {
    super()
    this.state = {
      character: '',
    }

    this.fetchData = this.fetchData.bind(this);
    this.randomId = this.randomId.bind(this);
  }

  componentWillReceiveProps(props){
    const id = props.match.params.characterId;

    this.fetchData(id);
  }

  fetchData(id){
    fetch(`https://swapi.co/api/people/${id}`)
    .then(results => {
        return results.json();
      }).then((character) => {
        this.setState({character});
      })
  }

  randomId(){
    return Math.floor(Math.random()+1 * 10)-1;
  }

  render() {
    const {character} = this.state;


    return (
    <div style={{padding: "30px"}}>
      <h4>Character</h4>
      <div style={{marginLeft:"5px"}}>
        <p>name: {character.name}</p>
        <p>gender: {character.gender}</p>
        <p>hair color: {character.hair_color}</p>
        <p>skin color: {character.skin_color}</p>
        <CharacterWorld worldId={this.randomId()}/>
      </div>
    </div>
    );
  }
};

export default Character;