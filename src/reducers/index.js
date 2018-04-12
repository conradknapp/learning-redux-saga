import { combineReducers } from "redux";
import data_reducer from "./data_reducer";

const rootReducer = combineReducers({
  data: data_reducer
});

export default rootReducer;
