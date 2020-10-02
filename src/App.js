import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    
    super();
    
    this.state = {
      string: 'Fahad',
      num: 1
    };
    
  }
  
  render() {
    
    return(
      
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello my name is {this.state.string} + {this.state.num}</p>
              <button onClick={ 
                  ()=> { 
                    var newName = '';

                    if (this.state.string === 'Qureshi') {
                      newName = 'Fahad'
                    }
                    else {
                      newName = 'Qureshi'
                    }
                    
                    this.setState( {
                      string: newName,
                      num: this.state.num + 1
                    })

                    
                  }
                  }>
                    Change Text
                </button>
          </header>
        </div>
      
      
      );
    
    
  }
  
}

export default App;
