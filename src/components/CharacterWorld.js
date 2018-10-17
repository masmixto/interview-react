import React, { Component } from 'react';

class CharacterWorld extends Component {
  constructor(){
    super();
    this.state = {
      planet: Object,
    }
  }

  componentWillReceiveProps(props){
    const id = props.worldId;
    this.fetchData(id);
  }

  fetchData(id){
    fetch(`https://swapi.co/api/planets/${id}/`)
    .then(results => {
        return results.json();
      }).then((planet) => {
        this.setState({planet});
      })
  }

  render(){
    const {planet} = this.state;
    return (
      <div>
        <h4>Home planet:</h4>
        <div style={{marginLeft: "10px"}}>
          <p>name: {planet.name}</p>
          <p>rotation period: {planet.rotation_perdiod}</p>
          <p>orbital period: {planet.orbital_period}</p>
          <p>gravity: {planet.gravity}</p>
        </div>
      </div>
      )
  }
}

export default CharacterWorld;