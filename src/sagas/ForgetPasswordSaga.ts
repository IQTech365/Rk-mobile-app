import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {ForgetPasswordService, SigninService} from '../service/AuthService';
import {IForgetPasswordRequest} from '../interface/forgetPassword/IForgetPasswordRequest';
import {IForgetPasswordResponse} from '../interface/forgetPassword/IForgetPasswordResponse';
import { forgetFailure, forgetRequest, forgetSuccess } from '../redux/slices/ForgetPasswordSlice';

export function* forgetPasswordSaga(
  action: PayloadAction<IForgetPasswordRequest>,
) {
  try {
    console.log('forget pass api', action.payload);
    
    const response: IForgetPasswordResponse = yield call(
      ForgetPasswordService,
      action.payload,
    );
    console.log('ForgetPassword-saga--response--', JSON.stringify(response));
    yield put(forgetSuccess(response));
  } catch (error) {
    console.log('ForgetPassword-saga----', JSON.stringify(error));
    yield put(forgetFailure(error));
  }
}

export function* watcherForgetPasswordSaga() {
  yield takeLatest(forgetRequest.type, forgetPasswordSaga);
}
