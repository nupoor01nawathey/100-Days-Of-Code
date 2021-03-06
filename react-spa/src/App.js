import React, { Component } from 'react';
import Sample from './myComponent';
import AddNewKid from './AddNewKid';

class App extends Component {
  state = {
    details : [ 
      { name: "Ayush", age: "5", city: "Pune", id: 1 },
      { name: "Anya", age: "2", city: "Mumbai", id: 2 },
      { name: "Anika", age: "1", city: "Delhi", id: 3 },
      { name: "Myrah", age: "3", city: "Nagpur", id: 4 }
    ]
  }

  addNewKid = (newKid) => {
    newKid.id = Math.random() * 10 ;
    let kids = [...this.state.details, newKid];
    this.setState({
      details: kids
    });
  }

  deleteKid = (id) => {
    let kids = this.state.details.filter(kid => {
        return kid.id !== id;
    });
    this.setState({
      details: kids
    });
  }

  render() {
    return (
      <div className="App">
          <p>I'm from main App.js</p>
          <Sample kids={this.state.details} deleteKid={this.deleteKid} />
          <AddNewKid addNewKid={this.addNewKid} />
      </div>
    )
  }
}

export default App;
