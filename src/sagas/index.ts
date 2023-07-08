import {all, fork} from 'redux-saga/effects';

//watcher Sagas
import { watcherSigninSaga } from './SigninSaga';
import { watcherSignupSaga } from './SignupSaga';
import { watcherContentSaga } from './ContentSaga';
import { watcherMessageSaga } from './MessageSaga';
import { watcherProfileSaga } from './ProfileSaga';
import { watcherNotificationSaga } from './NotificationSaga';

export function* rootSaga() {
    yield all([
        fork(watcherSigninSaga),
        fork(watcherSignupSaga),
        fork(watcherContentSaga),
        fork(watcherMessageSaga),
        fork(watcherProfileSaga),
        fork(watcherNotificationSaga),
    ])
}