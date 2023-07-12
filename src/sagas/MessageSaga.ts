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
import { IMessageResponse } from '../interface/message/IMessageResponse';

export function* sendMessageSaga(action: PayloadAction<ISendMessage>) {
  try {
    //@ts-ignore
    const response: any = yield call(
      MessageService.sendMessage,
      action.payload,
    );
    console.log('response-send-mssge--', JSON.stringify(response));
    yield put(sendMessageSuccess(response));
  } catch (error) {
    yield put(sendMessageFailure(error));
  }
}

export function* fetchMessagesSaga(action: PayloadAction<string>) {
  try {
    const response: IMessageResponse = yield call(
      MessageService.fetchMessages,
      action.payload,
    );
    console.log('response-mssge--', JSON.stringify(response));
    yield put(fetchMessagesSuccess(response));
  } catch (error) {
    yield put(fetchMessagesFailure(error));
  }
}

export function* watcherMessageSaga() {
  yield takeLatest(sendMessage.type, sendMessageSaga);
  yield takeLatest(fetchMessages.type, fetchMessagesSaga);
}
