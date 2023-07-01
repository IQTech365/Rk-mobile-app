import {all, fork} from 'redux-saga/effects';

//watcher Sagas
import { watcherSigninSaga } from './SigninSaga';
import { watcherSignupSaga } from './SignupSaga';
import { watcherContentSaga } from './ContentSaga';
import { watcherMessageSaga } from './MessageSaga';

export function* rootSaga() {
    yield all([
        fork(watcherSigninSaga),
        fork(watcherSignupSaga),
        fork(watcherContentSaga),
        fork(watcherMessageSaga)
    ])
}