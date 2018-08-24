import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import list from './list';

//filter the results by search
//Higher order function is a function that returns another function

function isSearched(searchTerm){
  return function(item){
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}


class App extends Component {

  // setting up internal component state
  // ES6 class can use constructor to initialize state
  constructor(props){
    //super props sets this.props to the constructor
    super(props);

    //setting state
    this.state = {
      list,
      searchTerm: '' 
    }
    // Bind the function to this (app component)
    this.removeItem = this.removeItem.bind(this);
    this.searchValue = this.searchValue.bind(this);
  }

  // Remove function



  //Let's rewrite removeItem fucntion in ES6

  removeItem(id){
    // const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }


  // get input field value from search form
searchValue(event){
  // console.log(event);
  this.setState({ searchTerm: event.target.value });
}

  render() {

    const { list, searchTerm } = this.state;

    console.log(this);
    return (
      <div className="App">

        <Search 
          onChange={this.searchValue}
          value={searchTerm} 
        >Search here</Search>

        <Table 
        list={ list }
        searchTerm={ searchTerm }
        removeItem={ this.removeItem }

        />
       
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { onChange, value, children } = this.props;
    return (
        <form>
          { children }
          <input 
          type="text" 
          onChange={ onChange } 
          value={ value } 
          />
        </form>

    );
  }
}

class Table extends Component {
  render(){
    const { list, searchTerm, removeItem } = this.props;
    return(
      <div>
        {
          list.filter(isSearched(searchTerm)).map(item =>
            <div key={item.objectID}>
              <h1> <a href={item.url}> {item.title} </a> by {item.author} </h1>
              <h4>{item.num_comments} Comments | {item.points} Points</h4>
              <button type='button' onClick={() => removeItem(item.objectID)}>Remove</button>
            </div>
          )
        }  
      </div>

    );
  }
}

export default App;
