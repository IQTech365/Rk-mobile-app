import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  qrimageFailure,
  qrimageRequest,
  qrimageSuccess,
} from '../redux/slices/QRimageSlice';
import {fetchQRimage} from '../service/QRimageService';

export function* qrImageSaga(action: PayloadAction<any>) {
  try {
    console.log('qrImage pass api', action.payload);

    const response: any = yield call(fetchQRimage);
    console.log('QR image-saga--response--', JSON.stringify(response));
    yield put(qrimageSuccess(response.data));
  } catch (error) {
    console.log('QR image--saga----', JSON.stringify(error));
    yield put(qrimageFailure(error));
  }
}

export function* watcherQRimageSaga() {
  yield takeLatest(qrimageRequest.type, qrImageSaga);
}
