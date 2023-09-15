import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {ChangePasswordService} from '../service/AuthService';
import {IChangePasswordRequest} from '../interface/changePassword/IChangePasswordRequest';
import {IChangePasswordResponse} from '../interface/changePassword/IChangePasswordResponse';
import {
  changePasswordFailure,
  changePasswordRequest,
  changePasswordSuccess,
} from '../redux/slices/changePasswordSlice';

export function* changePasswordSaga(
  action: PayloadAction<IChangePasswordRequest>,
) {
  try {
    console.log('change pass api', action.payload);

    const response: IChangePasswordResponse = yield call(
      ChangePasswordService,
      action.payload,
    );
    console.log('ChangePassword-saga--response--', JSON.stringify(response));
    yield put(changePasswordSuccess(response));
  } catch (error) {
    console.log('CahangePassword-saga----', JSON.stringify(error));
    yield put(changePasswordFailure(error));
  }
}

export function* watcherChangePasswordSaga() {
  yield takeLatest(changePasswordRequest.type, changePasswordSaga);
}
