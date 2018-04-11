import React, { Component } from "react";

// class SingleTodo extends Component {
//     constructor() {
//         super();
//     }
//     render() {
//         return (
//             <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         );
//     }
// }

// Function that cannot be changed, passing props through to this function
const SingleTodo = props => {
    return (
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    );
}

// Export so it can be used by App.js
export default SingleTodo;