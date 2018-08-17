import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>Paragraph is working too !!</p>
        <Person name="Nupoor" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Cooking </Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi I\'m called from React App')); // json == null
  }
}

export default App;
