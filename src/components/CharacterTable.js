import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CharacterTable extends Component {
  render() {
    const {characters} = this.props;
    const charList = characters.map((character, i) =>
        <CharDetails character={character} key={i}/>
  );

    return (
      <table className={"table"}>
        <thead key={"thead"}>
          <Header />
        </thead>
        <tbody key={"tbody"}>
          {charList}
        </tbody>
      </table>
    )
  }
}

export default CharacterTable;

// const CharDetails = (props) => {
class CharDetails extends Component {
  render (){
    const {character} = this.props;
    
    return (
        <tr>
            <td>
              <Link to={`/character/${character.id}`}>
                {character.name}
              </Link>
            </td>
          <td>{character.height}</td>
          <td>{character.mass}</td>
        </tr>
      );
  }
}

const Header = () => {
  return (
    <tr>
      <th>Name</th>
      <th>Height</th>
      <th>Mass</th>
    </tr>
  )
}


