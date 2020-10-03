import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  
  constructor() {
    
    super();
    
    this.state = {

      monsters: [],
      searchField: ''
    };
    
    //this.handleChange = this.handleChange.bind(this);
    
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
          console.log(users);
          this.setState({monsters: users});
          }
        )
  }
  
  handleChange = e => {
    
    this.setState({searchField: e.target.value})
  }
  
  render() {
    
     const { monsters , searchField } = this.state;
     
     //const filteredMonsters = monsters;
    
     const filteredMonsters = monsters.filter(eachMonster => 
     
       eachMonster.name.toLowerCase().includes(searchField.toLowerCase())
     
     );
    
    return(
      
          <div className="App">

            <Searchbox 
                placeHolder='Search monsters' 
                handleChange={this.handleChange} 
            />
            
            
            
            
          <CardList monsters={filteredMonsters}/>

        </div>
      
      
      );
    
    
  }
  
}

export default App;
