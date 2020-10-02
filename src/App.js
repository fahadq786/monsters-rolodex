import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    
    super();
    
    this.state = {

      monsters: [
        {
          name: 'Frank'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        },
        {
          name: 'Jinn'
        },
        
        ]
    };
    
  }
  
  render() {
    
    return(
      
          <div className="App">

          {
            this.state.monsters.map(monster => 
              <h1>{monster.name}</h1>
            )
          }

        </div>
      
      
      );
    
    
  }
  
}

export default App;
