import {takeLatest} from 'redux-saga/effects';
import {session, signin, signup} from '../ducks/auth';
import {handleFetchSession, handleSignin, handleSignup} from './handlers/auth';

export function* watcherSaga() {
  // Auth
  yield takeLatest(signin.type, handleSignin);
  yield takeLatest(signup.type, handleSignup);
  yield takeLatest(session.type, handleFetchSession);
}
