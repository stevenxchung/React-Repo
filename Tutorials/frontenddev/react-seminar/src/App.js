import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Get SingleTodo from out source folder
import SingleTodo from "./SingleTodo";

// Create a new React component
class App extends Component {
  // Standard declaration in a React App
  constructor() {
    // Allows us to use the keyword "this"
    super();
    // Set initial state
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }
  
  // Arrow notation allows us to specify what variable we are passing in, in this case we are passing "e" through
  onInputChange = e => {
    this.setState({ currentTodo: e.target.value });
  }
  
  // onClick() has no variable passing through
  onClick = () => {
    // Create a copy of the original todos list
    let todosCopy = this.state.todos.slice();
    // Adding a new todo to the end of the todos list
    todosCopy.push(this.state.currentTodo);
    // Set state to reflect changes and clear currentTodo form
    this.setState({ todos: todosCopy, currentTodo: "" });
  }
  
  // deleteTodo() has the variable i, passing through 
  deleteTodo = i => {
     // Create a copy of the original todos list
    let todosCopy = this.state.todos.slice();
    // Remove 1 todo at index i
    todosCopy.splice(i, 1);
     // Set state to reflect changes
    this.setState({ todos: todosCopy});
  }
  
  // Render a page to be displayed
  render() {
    // Map each todo on to an unordered list
    let bulletedTodos = this.state.todos.map((e, i) => {
      return (
        // Can pass SingleTodo as an HTML element from SingleTodo.js
        <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
        );
    });
    
    // Add a todo to the page
    return (
      // Form to enter todos
      // onChange triggers a function and passes an event
      <div>
        <input placeholder="Enter todo" value={this.state.currentTodo}
        onChange={this.onInputChange}/>
        <button onClick={this.onClick}>Add!</button>
        <br/>
        { this.state.todos.length === 0 ? "No todos yet!" : <ul>{bulletedTodos}</ul> }
      </div>
    );
  }
}

// Export so other files can use it elsewhere
export default App;
