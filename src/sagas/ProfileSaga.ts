import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import * as ProfileService from '../service/ProfileService';
import { fetchProfile, fetchProfileFailure, fetchProfileSuccess, updateProfile, updateUser, updateUserFailure, updateUserSuccess } from '../redux/slices/ProfileSlice';
import { IProfileUpdateRequest } from '../interface/profile/IProfileUpdateRequest';
import { IProfileUpdateResponse } from '../interface/profile/IProfileUpdateResponse';
import { updateProfileFailure, updateProfileSuccess } from '../redux/slices/ProfileSlice';
import { IProfileResponse } from '../interface/profile/IProfileResponse';
import { IUser, IUserResponse } from '../interface/user/IUser';

export function* updateProfileSaga(action: PayloadAction<IProfileUpdateRequest>) {
    try {
        const response: IProfileUpdateResponse = yield call(ProfileService.updateProfile, action.payload);
        console.log('updateProfileSaga--response--', JSON.stringify(response));
        yield put(updateProfileSuccess(response));
    } catch (error) {
        console.log('updateProfileSaga-error---', JSON.stringify(error));
        yield put(updateProfileFailure(error));
    }
}

export function* fetchProfileSaga(action: PayloadAction<string>) {
    try {
        const response: IProfileResponse = yield call(ProfileService.fetchProfile, action.payload);
        console.log('fetchProfileSaga--response--', JSON.stringify(response));
        yield put(fetchProfileSuccess(response));
    } catch (error) {
        console.log('fetchProfileSaga-error---', JSON.stringify(error));
        yield put(fetchProfileFailure(error));
    }
}

export function* updateUserSubscriptionSaga(action: PayloadAction<IUser>) {
    try {
        const response: IUserResponse = yield call(ProfileService.updateUserSubscription, action.payload);
        console.log('updateUserSubscriptionSaga--response--', JSON.stringify(response));
        yield put(updateUserSuccess(response));
    } catch (error) {
        console.log('updateUserSubscriptionSaga-error---', JSON.stringify(error));
        yield put(updateUserFailure(error));
    }
}

export function* watcherProfileSaga() {
    yield takeLatest(updateProfile.type, updateProfileSaga);
    yield takeLatest(fetchProfile.type, fetchProfileSaga);
    yield takeLatest(updateUser.type, updateUserSubscriptionSaga);
}