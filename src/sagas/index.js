import { takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/types";

import { fetchData } from "../actions/index";

function* mySaga() {
  yield takeLatest(actionTypes.FETCH_DATA, fetchData);
}

export default mySaga;
