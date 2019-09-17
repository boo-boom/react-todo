// store增强器
const logger = createStore => (...arg) => {
  const store = createStore(...arg);
  const dispatch = action => {
    console.group("store增强器：", action.type);
    console.log("dispatching:", action);
    const result = store.dispatch(action);
    console.log("next state:", store.getState());
    console.groupEnd();
    return result;
  };
  // 覆盖store上的dispatch
  return { ...store, dispatch };
};

export default logger;
