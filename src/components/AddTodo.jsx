import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addTodo(this.props.text);
  }

  handleChange(e) {
    this.props.setTodoText(e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.text}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
