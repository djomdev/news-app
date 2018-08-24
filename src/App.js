import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import list from './list';


class App extends Component {

  // setting up internal component state
  // ES6 class can use constructor to initialize state
  constructor(props){
    //super props sets this.props to the constructor
    super(props);

    //setting state
    this.state = {
      list: list
    }
    // Bind the function to this (app component)
    this.removeItem = this.removeItem.bind(this);
  }

  // Remove function

  removeItem(id){
    console.log('Remove item');
    //using javascript filter method
    // we can filter out the click item and render the updated list
    function isNotId(item){
      return item.objectID !== id;
    }
    //create a new updated list

    const updatedList = this.state.list.filter(isNotId);
    //assign the new updated list to the list using setState method
    this.setState({ list: updatedList });

    // THE STEPS WE TOOK TO UPDATE THE STATE:
    // I- We triggered a click event using the button in our view.
    // II- A removeItem function modifies the internal state using setState method.
    // III- Component state and the render method runs and update the view.


  }

  render() {

    console.log(this);

    //install react extension in browser

    return (
      <div className="App">

        {
          this.state.list.map( item =>
            <div key={ item.objectID }>
                <h1> <a href={ item.url }> {item.title} </a> by {item.author} </h1>
                <h4>{ item.num_comments } Comments | { item.points } Points</h4>
                { /* Comments in JSX -- TO USE THIS KEYWORD, USE ARROW FUNCTION ONLY */ }
                <button type='button' onClick={ () => this.removeItem(item.objectID) }>Remove</button>
            </div>
          )
        }   
      
      </div>
    );
  }
}

export default App;
