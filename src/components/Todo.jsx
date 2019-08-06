import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { completed, text, toggleTodo } = this.props;
    return (
      <li
        style={{ textDecoration: completed ? "line-through" : "none" }}
        onClick={toggleTodo}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
