import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
     { id:'a1', name: 'Max', age:28},
     { id:'a2', name: 'Manu', age:29},
     { id:'a3', name: 'Lala', age:25}
    ],
    otherState:'some other value',
    showPerson:false
  }

  switchNameHandler =(newName)=>{
    //console.log('Was clicked!');
    //DoN'T DO THIS: this.state.persons[0].name='Maximilian'
    this.setState({ 
      persons:[
        { id:'a1', name: newName, age:28},
        { id:'a2', name: 'Manu', age:29},
        { id:'a3', name: 'Lala', age:25}
    ]});
  }

  togglePersonHandler =()=>{
    this.setState({showPerson:!this.state.showPerson});
  }

  deletePersonHandler = (personIndex)=>{
    //bad partice
    //const persons = this.state.persons;
    //need copy array
    //const persons = this.state.persons.slice();
    //or using spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  nameChangeHandler=(event, id)=>{
     const personIndex = this.state.persons.findIndex(p=>{return p.id === id});
     const person = {...this.state.persons[personIndex]};
     person.name = event.target.value;
     const persons = [...this.state.persons];
     persons[personIndex] = person;
     this.setState({ 
      persons
    });
  }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons;
    if(this.state.showPerson){
      persons=(
            <div>
              {this.state.persons.map((person, index)=>{
                return <Person key={person.id} name={person.name} age={person.age}
                          click={()=>this.deletePersonHandler(index)}
                          changed={(event)=>this.nameChangeHandler(event, person.id)}
                         />}
              )}
            </div>
      );
    }

    return (
      <div className="App">
          <h1>Welcome to React</h1>
          <p>This is really working!</p>
          <button style={style} onClick={()=>{this.switchNameHandler('Max2');}}>Switch Name</button>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Name</button>
          {persons}
      </div>
    );
      // return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Welcome to React'));
    
  }
}

export default App;
