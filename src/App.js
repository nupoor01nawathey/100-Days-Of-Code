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

  switchNameHandler = (newName) => {
    // console.log('This was clicked');
    // this.state.people[1].name = 'Ariji'; // don't change mutable CONST
    this.setState({people: [
        { name: 'Badshah', age: '28' },
        { name: 'Brodha', age: '29'},
        { name: newName, age: '30'}
      ] 
    }); // method to update state property and react will come to know what to update
  };

  nameChangedHandler = (event) => {
    this.setState({people: [
        { name: 'Badshah', age: '28' },
        { name: event.target.value , age: '29'},
        { name: 'Stephanie', age: '30'}
      ] 
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>Paragraph is working too !!</p>
        <button onClick={ () => this.switchNameHandler('BADSHAH!!')}>Switch Name</button>
        <Person 
          name={this.state.people[0].name} 
          age={this.state.people[0].age}/>
        <Person 
          name={this.state.people[1].name} 
          age={this.state.people[1].age} 
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, 'Max11')}>My Hobbies: Cooking </Person>
        <Person 
        name={this.state.people[2].name} 
        age={this.state.people[2].age} />
      </div>
    );
    // You can pass methods as props in Person.js, example click=this.switchNameHandler
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi I\'m called from React App')); // json == null
  }
}

export default App;
