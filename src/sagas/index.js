import * as actionTypes from "../actions/types";

import { onFetchData } from "../actions/index";
import { takeEvery } from "redux-saga/effects";

function* mySaga() {
  yield takeEvery(actionTypes.FETCH_DATA, onFetchData);
}

export default mySaga;
