import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <p>This is really working!</p>
          <Person name="Max" age="28" />
          <Person name="Manu" age="29">My Hobbies:Racing</Person>
          <Person name="Lala" age="25" />
      </div>
    );
      // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Welcome to React'));
    
  }
}

export default App;
