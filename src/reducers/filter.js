import { CHANGE_FILTER } from "../actions/actionTypes";

const filter = (state = 'all', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter
    default:
      return state;
  }
}

export default filter;
