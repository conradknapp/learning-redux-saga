import * as actionTypes from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return { data: action.data };
    default:
      return state;
  }
};
