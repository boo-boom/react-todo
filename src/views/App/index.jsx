import React, { Component } from "react";
import "./App.css";
import AddTodoContainer from "../../containers/AddTodoContainer";
import TodoListContainer from "../../containers/TodoListContainer";
import FooterContainer from "../../containers/FooterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddTodoContainer />
          <TodoListContainer />
          <FooterContainer />
        </header>
      </div>
    );
  }
}

export default App;
