import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Max', age: 28 },
      { id: 'a2', name: 'Manu', age: 29 },
      { id: 'a3', name: 'Lala', age: 25 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DoN'T DO THIS: this.state.persons[0].name='Maximilian'
    this.setState({
      persons: [
        { id: 'a1', name: newName, age: 28 },
        { id: 'a2', name: 'Manu', age: 29 },
        { id: 'a3', name: 'Lala', age: 25 }
      ]
    });
  }

  togglePersonHandler = () => {
    this.setState({ showPerson: !this.state.showPerson });
  }

  deletePersonHandler = (personIndex) => {
    //bad partice
    //const persons = this.state.persons;
    //need copy array
    //const persons = this.state.persons.slice();
    //or using spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    });
  }
  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}>
          </Persons>
      );
    }


    return (
      <ErrorBoundary>
        <div className={classes.App}>
          <Cockpit 
            showPerson={this.state.showPerson} 
            persons={this.state.persons}
            clicked={this.togglePersonHandler} />
          {persons}
        </div>
      </ErrorBoundary>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Welcome to React'));

  }
}

export default App;

