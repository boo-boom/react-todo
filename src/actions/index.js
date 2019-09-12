import axios from "axios";

import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER,
  SET_TODO_TEXT,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "./actionTypes";

let nextTodoId = 3;

/**
 * 新增待办事项
 * @param {string} text
 * @param {number} nextTodoId
 */
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
};

/**
 * 更改待办事项状态
 * @param {number} id
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

/**
 * 修改筛选条件
 * @param {string} filter
 */
export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter
});

/**
 * 设置代办事项文本
 * @param {number | string} text
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
});

/**
 * 异步action
 */
const fetchTodosRequest = () => ({
  type: FETCH_TODOS_REQUEST
});
const fetchTodosSuccess = data => ({
  type: FETCH_TODOS_SUCCESS,
  data
});
const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  error
});
export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest())
    axios.get("db.json").then(res => {
      dispatch(fetchTodosSuccess(res.data))
    }).catch(err => {
      dispatch(fetchTodosFailure(err))
    });
  };
};

