import React, { Component } from "react";
// import logo from "./../../assets/svg/logo.svg";
import "./App.css";
import AddTodo from "../../components/AddTodo";
import Footer from "../../components/Footer";
import TodoList from "../../components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filter: "all"
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

  // 使用箭头函数不修改this指向
  addTodo = text => {
    const todo = {
      id: this.nextTodoId++,
      text,
      completed: false
    };
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  toggleTodo = id => {
    const newTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({
      todos: newTodos
    });
  }

  changeFilter = filter => {
    this.setState({
      filter
    })
  }

  render() {
    const { filter } = this.state;
    const todos = this.getVisibleTodos();
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <AddTodo addTodo={this.addTodo} />
          <TodoList todos={todos} toggleTodo={this.toggleTodo} />
          <Footer filter={filter} changeFilter={this.changeFilter} />
        </header>
      </div>
    );
  }
}

export default App;
