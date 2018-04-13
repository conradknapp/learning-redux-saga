import * as actionTypes from "../actions/types";

import { onFetchData } from "../actions/index";
import { takeEvery, takeLatest, select } from "redux-saga/effects";

function* mySaga() {
  yield takeEvery("*", function* logger(action) {
    const state = yield select();
    console.log("action", action);
    console.log("after", state);
  });
  yield takeLatest(actionTypes.FETCH_DATA, onFetchData);
}

// function* cancelWorkerSaga(task) {
//   yield cancel(task);
// }

export default mySaga;
