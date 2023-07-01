import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import { SigninService } from '../service/AuthService';
import { ISigninRequest } from '../interface/signin/ISigninRequest';
import { ISigninResponse } from '../interface/signin/ISigninResponse';
import { signinFailure, signinSuccess, signinRequest } from '../redux/slices/SigninSlice';

export function* signinSaga(action: PayloadAction<ISigninRequest>) {
    try {
        const response: ISigninResponse = yield call(SigninService, action.payload);
        console.log('signin-saga--response--', JSON.stringify(response));
        yield put(signinSuccess(response));
    } catch (error) {
        console.log('signin-saga----', JSON.stringify(error));
        yield put(signinFailure(error));
    }
}

export function* watcherSigninSaga() {
    yield takeLatest(signinRequest.type, signinSaga);
}