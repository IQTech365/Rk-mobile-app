import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/user";
import * as USER_SERVICE from "../requests";

export function* handleGetUser(action) {
  try {
    const response = yield call(USER_SERVICE.getUser);
    const { data } = response;
    yield put(setUser({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
