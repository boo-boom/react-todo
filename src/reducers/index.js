/**
 * reducer: 一个函数接收state和type，根据type返回一个新的state
 */

import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import text from './text'

export default combineReducers({
  todos,
  filter,
  text
});
