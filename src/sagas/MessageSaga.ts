import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import * as MessageService from '../service/MessageService';
import {ISendMessage} from '../interface/message/ISendMessage';
import {
  fetchMessages,
  fetchMessagesFailure,
  fetchMessagesSuccess,
  sendMessage,
  sendMessageFailure,
  sendMessageSuccess,
} from '../redux/slices/MessageSlice';
import {IMessage} from '../interface/message/IMessage';

export function* sendMessageSaga(action: PayloadAction<ISendMessage>) {
  try {
    //@ts-ignore
    const response: any = yield call(
      MessageService.sendMessage,
      action.payload,
    );
    yield put(sendMessageSuccess(response));
  } catch (error) {
    yield put(sendMessageFailure(error));
  }
}

export function* fetchMessagesSaga(action: PayloadAction<string>) {
  try {
    const response: Array<IMessage> = yield call(
      MessageService.fetchMessages,
      action.payload,
    );
    yield put(fetchMessagesSuccess(response));
  } catch (error) {
    yield put(fetchMessagesFailure(error));
  }
}

export function* watcherMessageSaga() {
  yield takeLatest(sendMessage.type, sendMessageSaga);
  yield takeLatest(fetchMessages.type, fetchMessagesSaga);
}
