import React, { Component } from "react";
import axios from "axios";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "123"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.requestTest();
  }

  requestTest() {
    axios.get("/posts").then(res => {
      console.log(res.data);
    });
  }

  handleClick() {
    this.props.addTodo(this.state.value);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} readOnly />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTodo;
