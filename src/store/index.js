import { createStore } from 'redux'
import rootReducer from '../reducers'
// import { addTodo, toggleTodo } from "../actions";

const store = createStore(rootReducer)

// // 初始化state
// console.log(store.getState())

// // 订阅state的变化
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// })

// // 发生action
// store.dispatch(addTodo('触发addTodo action'))
// store.dispatch(toggleTodo(0))

// // 取消订阅
// unsubscribe();

export default store;
