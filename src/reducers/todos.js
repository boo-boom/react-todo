import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../actions/actionTypes";

const initState = {
  isFetching: false,
  error: null,
  data: []
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, isFetching: true }
    case FETCH_TODOS_SUCCESS:
      return { ...state, isFetching: false, data: action.data }
    case FETCH_TODOS_FAILURE:
      return { ...state, isFetching: false, error: action.error }
    default:
      return { ...state, data: todos(state.data, action) }
  }
}

export default reducer;
