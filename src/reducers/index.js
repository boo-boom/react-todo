/**
 * reducer: 一个函数接收state和type，根据type返回一个新的state
 */

import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER,
  SET_TODO_TEXT
} from "./actionTypes";

const initState = {
  filter: 'all',
  text: '',
  todos: []
}

const todoApp = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    case SET_TODO_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
};

export default todoApp;
