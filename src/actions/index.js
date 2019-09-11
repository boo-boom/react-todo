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

let nextTodoId = 0;

/**
 * 新增待办事项
 * @param {string} text
 */
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

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
const fetchTodosSuccess = res => ({
  type: FETCH_TODOS_SUCCESS,
  res
});
const fetchTodosFailure = err => ({
  type: FETCH_TODOS_FAILURE,
  err
});
export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest())
    axios.get("db.json").then(res => {
      dispatch(fetchTodosSuccess(res))
      console.log(res)
    }).catch(err => {
      dispatch(fetchTodosFailure(err))
      console.log(err)
    });
  };
};

