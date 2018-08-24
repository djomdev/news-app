import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import list from './list';

//let's create some sample list of data




class App extends Component {
  render() {
    return (
      <div className="App">

        {
          list.map(function(item){
            return (
            <div key={ item.objectID }>
                <h1> <a href={ item.url }> {item.title} </a> by {item.author} </h1>
                <h4>{ item.num_comments } Comments | { item.points } Points</h4>
            </div>
            );
          })
        }   
      
      </div>
    );
  }
}

export default App;
