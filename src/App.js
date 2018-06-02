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
    otherState:'some other value',
    showPerson:false
  }

  switchNameHandler =(newName)=>{
    //console.log('Was clicked!');
    //DoN'T DO THIS: this.state.persons[0].name='Maximilian'
    this.setState({ 
      persons:[
        { name: newName, age:28},
        { name: 'Manu', age:29},
        { name: 'Lala', age:25}
    ]});
  }

  togglePersonHandler =()=>{
    this.setState({showPerson:!this.state.showPerson});
  }

  nameChangeHandler=(event)=>{

     this.setState({ 
      persons:[
        { name: 'Max', age:28},
        { name: event.target.value, age:29},
        { name: 'Lala', age:25}
    ]});
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
              {this.state.persons.map(person=>{
                return <Person name={person.name} age={person.age}  />}
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
