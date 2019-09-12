// 展示组件：页面的渲染
import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addTodo(this.props.text, this.props.todoLen);
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
        <button onClick={this.handleClick}>Add id: {this.props.todoLen}</button>
      </div>
    );
  }
}

export default AddTodo;
