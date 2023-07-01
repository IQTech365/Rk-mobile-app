import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import { ICategory, ICategoryResponse } from '../interface/home/ICategoryResponse';
import * as ContentService from '../service/ContentService';
import { categoriesFetchFailure, categoriesFetchSuccess, fetchCategories } from '../redux/slices/CategoriesSlice';
import { categoryFetchFailure, categoryFetchSuccess, fetchCategory } from '../redux/slices/CategorySlice';
import { IVideo, IVideoResponse } from '../interface/home/IVideoResponse';
import { fetchVideos, videosFetchFailure, videosFetchSuccess } from '../redux/slices/VideosSlice';
import { fetchVideo, videoFetchFailure, videoFetchSuccess } from '../redux/slices/VideoSlice';

/**
 * Category Sagas
 */
export function* categoriesSaga(action: PayloadAction) {
    try {
        const response: ICategoryResponse = yield call(ContentService.fetchCategories);
        yield put(categoriesFetchSuccess(response));
    } catch (error) {
        yield put(categoriesFetchFailure(error));
    }
}

export function* categorySaga(action: PayloadAction<string>) {
    try {
        const response: ICategory = yield call(ContentService.fetchCategory, action.payload);
        yield put(categoryFetchSuccess(response));
    } catch (error) {
        yield put(categoryFetchFailure(error));
    }
}

/**
 * Video Sagas
 */
 export function* videosSaga(action: PayloadAction) {
    try {
        const response: IVideoResponse = yield call(ContentService.fetchVideos);
        yield put(videosFetchSuccess(response));
    } catch (error) {
        yield put(videosFetchFailure(error));
    }
}

export function* videoSaga(action: PayloadAction<string>) {
    try {
        const response: IVideo = yield call(ContentService.fetchCategory, action.payload);
        yield put(videoFetchSuccess(response));
    } catch (error) {
        yield put(videoFetchFailure(error));
    }
}

export function* watcherContentSaga() {
    yield takeLatest(fetchCategories.type, categoriesSaga);
    yield takeLatest(fetchCategory.type, categorySaga);
    yield takeLatest(fetchVideos.type, videosSaga);
    yield takeLatest(fetchVideo.type, videoSaga);

}