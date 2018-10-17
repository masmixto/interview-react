import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import CharacterTable from './components/CharacterTable';
import Character from './components/Character';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      character: Object,
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
    .then(results => {
        return results.json();
      })
      .then(data => {
        let i = 1;
        let characters = data.results.map((character) => {
            character.id = i++;
            return character;
        })
        this.setState({characters});
    })
  }

  render() {
    const {characters} = this.state;
    return (
      <Router>
        <div style={{width: "50%", float: "left"}}>
          <CharacterTable characters={characters}/>
        </div>
        <div style={{width: "50%", float: "right"}}>
          <Route path={"/character/:characterId"} component={Character} />
          <Route exact={true} path={"/"} component={() => {return <h1>Welcome</h1>}} />
        </div>
      </Router>
     
    );
  }
}

export default App;