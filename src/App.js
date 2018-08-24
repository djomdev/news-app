import React, { Component } from 'react';
import { Grid, Row, FormGroup } from 'react-bootstrap';
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

        <Grid fluid>
          <Row>
            <div className="jumbotron">
              <Search
                onChange={this.searchValue}
                value={searchTerm}
              >News App</Search>
            </div>
          </Row>
        </Grid>

        <Table 
        list={ list }
        searchTerm={ searchTerm }
        removeItem={ this.removeItem }

        />
       
      </div>
    );
  }
}


const Search = ({ onChange, value, children  }) => {
  return (
    <form>
      <FormGroup>
        <h1 style={{ fontWeight: 'bold' }}>{children}</h1> 
        <hr style={{ border: '2px solid black', width:'100px'}} />
        <div className="input-group">
         <input
          className="form-control width100 searchForm"
          type="text"
          onChange={onChange}
          value={value}
        />
        <span className="input-group-btn">
          <button
              className="btn btn-primary searchBtn"
          type="submit"
          >Search
          </button>
        </span>
        </div>
      </FormGroup>
    </form>

  );
}


const Table = ( {list, searchTerm, removeItem} ) => {
return (
  <div>
    {
      list.filter(isSearched(searchTerm)).map(item =>
        <div key={item.objectID}>
          <h1> <a href={item.url}> {item.title} </a> by {item.author} </h1>
          <h4>{item.num_comments} Comments | {item.points} Points</h4>
          <Button
            type='button'
            onClick={() => removeItem(item.objectID)}>
            Remove me</Button>
        </div>
      )
    }
  </div>
);
}

const Button = ({ onClick, children }) => 
  <button
    type='button'
    onClick={onClick}>
    {children}
  </button> 


export default App;
