import * as actionTypes from "./types";
import { call, put } from "redux-saga/effects";

const api = url => fetch(url).then(res => res.json());

export const onFetchData = () => {
  return {
    type: actionTypes.FETCH_DATA
  };
};

export function* fetchData(action) {
  try {
    const data = yield call(api, "https://swapi.co/api/people");

    yield put({ type: actionTypes.FETCH_DATA, data: data.results });
  } catch (err) {
    console.warn(err);
  }
}
