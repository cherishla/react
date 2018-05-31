import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
     { name: 'Max', age:28},
     { name: 'Manu', age:29},
     { name: 'Lala', age:25}
    ],
    otherState:'some other value'
  }

  switchNameHandler =()=>{
    //console.log('Was clicked!');
    //DoN'T DO THIS: this.state.persons[0].name='Maximilian'
    this.setState({ 
      persons:[
        { name: 'Maximilian', age:28},
        { name: 'Manu', age:29},
        { name: 'Lala', age:25}
    ]});
  }
  render() {
    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies:Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
      // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Welcome to React'));
    
  }
}

export default App;
