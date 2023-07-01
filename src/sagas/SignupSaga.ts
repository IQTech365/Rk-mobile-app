import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import { SignupService } from '../service/AuthService';
import { ISignupRequest } from '../interface/signup/ISignupRequest';
import { ISignupResponse } from '../interface/signup/ISignupResponse';
import { signupFailure, signupRequest, signupSuccess } from '../redux/slices/SignupSlice';

export function* signupSaga(action: PayloadAction<ISignupRequest>) {
    try {
        const response: ISignupResponse = yield call(SignupService, action.payload);
        console.log('response----', JSON.stringify(response));
        yield put(signupSuccess(response));
    } catch (error) {
        console.log('error----', JSON.stringify(error));
        yield put(signupFailure(error));
    }
}

export function* watcherSignupSaga() {
    yield takeLatest(signupRequest.type, signupSaga);
}