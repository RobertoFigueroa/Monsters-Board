import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters : [
        {name: 'Frankeistein', id: 'abc123'},
        {name: 'Drakula', id: 'cde234'},
        {name: 'Zombie', id:'fgh456'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.mosters.map(monster => 
            <h1 key={monster.id}> { monster.name } </h1>
            )
        }
      </div>
    );
  }
}

export default App;
