import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  fetchNotifications,
  notificationsFetchSuccess,
  notificationsFetchFailure,
} from '../redux/slices/NotificationSlice';
import * as NotificationService from '../service/NotificationService';
import {INotificationResponse} from '../interface/notification/INotification';

export function* notificationSaga(action: PayloadAction) {
  try {
    const response: INotificationResponse = yield call(
      NotificationService.getNotifications,
    );
    console.log('notificationSaga--response--', JSON.stringify(response));
    yield put(notificationsFetchSuccess(response));
  } catch (error) {
    console.log('notificationSaga----', JSON.stringify(error));
    yield put(notificationsFetchFailure(error));
  }
}

export function* watcherNotificationSaga() {
  yield takeLatest(fetchNotifications.type, notificationSaga);
}
