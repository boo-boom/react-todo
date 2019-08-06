import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER,
  SET_TODO_TEXT
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
