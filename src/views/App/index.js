import React, { Component } from "react";
import logo from "./../../assets/svg/logo.svg";
import "./App.css";
import AddTodo from "../../components/AddTodo";
import Footer from "../../components/Footer";
import TodoList from "../../components/TodoList";

const todos = [
  {
    id: 1,
    text: "学习react",
    completed: true
  },
  {
    id: 2,
    text: "学习vue",
    completed: true
  },
  {
    id: 3,
    text: "学习angular",
    completed: true
  }
];
const filter = "all";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
      filter
    };
    // 和UI没有关联，定义为普通的成员变量
    this.nextTodoId = 0;
  }

  getVisibleTodos() {
    const currentFilter = this.state.filter;
    return this.state.todos.filter(item => {
      if (currentFilter === "active") {
        return !item.completed;
      } else if (currentFilter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
  }

  addTodo(text) {

    // const todo = {
    //   id: this.nextTodoId,
    //   text,
    //   completed: false
    // };
    console.log(this.props)
    // const newTodos = [todo, ...this.state.todos];
    // this.setState({
    //   todos: newTodos
    // });
  }

  render() {
    const { filter } = this.state;
    const todos = this.getVisibleTodos();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AddTodo addTodo={this.addTodo} />
          <TodoList todos={todos} />
          <Footer filter={filter} />
        </header>
      </div>
    );
  }
}

export default App;
