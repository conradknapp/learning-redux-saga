import * as actionTypes from "./types";
import { call, put } from "redux-saga/effects";

const api = url => fetch(url).then(res => res.json());

export const fetchData = () => {
  return {
    type: actionTypes.FETCH_DATA
  };
};

export function* onFetchData(action) {
  try {
    const response = yield call(api, "https://swapi.co/api/people");

    yield put(onFetchDataSuccess(response));
  } catch (err) {
    console.warn(err);
  }
}

function onFetchDataSuccess(data) {
  return {
    type: actionTypes.FETCH_DATA,
    payload: data.results
  };
}
