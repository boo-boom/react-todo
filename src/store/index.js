import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
// redux中间件实现logger
import logger from "../middleware/logger";
// store增强器实现logger
import loggerEnhancer from "../enhancer/logger";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(
  // compose第一个参数传入中间件函数，第二个参数为增强器函数，二者均可以获取store的状态，推荐优先使用中间件模式
  // 中间件其实也是增强器的一种情况，相对于增强器有更高级别的抽象，直接使用增强器容易破坏store原结构
  applyMiddleware(thunk, logger),
  loggerEnhancer
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
