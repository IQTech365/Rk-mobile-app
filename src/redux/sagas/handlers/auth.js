import {call, put} from 'redux-saga/effects';
import Axios from '../../../lib/Axios';
import {api, apiError, apiSuccess} from '../../ducks/api';
import {
  signinError,
  signinSuccess,
  sessionSuccess,
  sessionError,
  sessionInit,
} from '../../ducks/auth';
import * as REQUESTS from '../requests';
import {LOCAL_STORAGE_CONSTANTS} from '../../../constants/index';

export function* handleSignin(action) {
  try {
    yield put(api());
    yield put(showBackdrop());
    const response = yield call(REQUESTS.handleSignin, action.payload);
    yield put(signinSuccess());
    Axios.defaults.headers.common['Authorization'] = response.token;
    yield put(apiSuccess());
  } catch (error) {
    yield put(signinError(error.message));
    yield put(apiError(error));
  } finally {
    yield put(resetBackdrop());
  }
}

export function* handleFetchSession(action) {
  try {
    const token = action.payload;
    // yield put(api());
    yield put(showBackdrop());
    const response = yield call(REQUESTS.handleFetchSession, token);
    yield put(sessionSuccess());
    // yield put(apiSuccess());
  } catch (error) {
    yield put(sessionError(error.message));
    // localStorage.clear();
    // yield put(apiError(error));
  } finally {
    yield put(sessionInit());
    yield put(resetBackdrop());
  }
}

export function* handleSignup(action) {
  try {
    // const response = yield call(REQUESTS.handleSignup, action.payload);
  } catch (error) {
    yield put(signinError(error.message));
  }
}
