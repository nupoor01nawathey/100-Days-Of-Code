import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js';

class App extends Component {
  state = {
    people: [
      { name: 'Nupoor', age: '28' },
      { name: 'Manu', age: '29'},
      { name: 'Stephanie', age: '26'}
    ] 
  };

  switchNameHandler = () => {
    // console.log('This was clicked');
    // this.state.people[1].name = 'Ariji'; // don't change mutable CONST
    this.setState({people: [
        { name: 'Nupoor', age: '28' },
        { name: 'Manu', age: '29'},
        { name: 'Stephanie', age: '30'}
      ] 
    }) ; // method to update state property and react will come to know what to update
  };


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>Paragraph is working too !!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My Hobbies: Cooking </Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi I\'m called from React App')); // json == null
  }
}

export default App;
