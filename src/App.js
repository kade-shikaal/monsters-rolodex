import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

/*.1*/
class App extends Component {
  constructor() {
    super(); // Calls the constructor method on the Component class
    this.state = {
      monsters: [], //the default value
      searchField: ""
    };
  }
  /*.2*/
  componentDidMount() {
    /*.3*/
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    /*Destructuring
    Same as saying : const monsters = this.state.monsters*/

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={e =>
            this.setState({ searchField: e.target.value })
          } /*anonymous function || the this keyword is set to the context of the class component || the this context is bound inside method because we called super() it extends functionality of component*/
        />
        {/*.4*/}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

/****************Comments****************/
/*.1*/
//by using a class that extends Component instead of a function you get access to the state

/*You are not allowed to modify state without calling setState because react intercepts from the DOM and updates the state and rerednders the component*/

//state: JS object with properties that can be accesed anytime in class

/*.2*/
//Life cycle methods are methods that get called at different stages of when the component gets rendered

/*.3*/
//wait for component to mount || fetch all these users || update states monsters with users

/*.4*/
/*Map() returns the return of whatever function passed to it, iterated over ever element in the array*/

/*Map() returns the return of whatever function passed to it, iterated over ever element in the array*/

/*mapped names are going to be the children of the card-list.components in between the div*/

/*This Keyword*/
/* JS does not set the scope of 'this' on functions, have to explicitly set the context of 'this' */

/* you can bind the context of the function using : 

this.handleChange = this.handleChange.bind(this) in the constructor || .bind() is a method that return a new function where the context of this is set to whatever is passed to it e.g. 'this' 

ES6 arrow functions automatically binds this to where the arrow function was defined originally || context is the app.js || lexical scoping - variable defined outside a function can be accessible inside another function defined
*/
