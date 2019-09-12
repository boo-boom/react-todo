import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(rootReducer, enhancer);

// import { addTodo, toggleTodo } from "../actions";

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
