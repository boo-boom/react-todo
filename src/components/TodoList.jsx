import React, { Component } from "react";
import Todo from "../components/Todo";

class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              toggleTodo={() => {
                toggleTodo(todo.id);
              }}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
