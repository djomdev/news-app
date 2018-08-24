import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//let's create some sample list of data


const list = [
  {
    title: 'Tell me the truth witout words',
    url: 'http://google.com',
    author: 'Diego',
    num_comments: 100,
    points: 50,
    objectID: 1
  },
  {
    title: 'Lorem Ipsum',
    url: 'http://google.com',
    author: 'Jesus',
    num_comments: 50,
    points: 20,
    objectID: 2
  },
  {
    title: 'Columbae sont timidae',
    url: 'http://google.com',
    author: 'Ortega',
    num_comments: 10,
    points: 5,
    objectID: 3
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">

        {
          list.map(function(item){
            return (
            <div>
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
