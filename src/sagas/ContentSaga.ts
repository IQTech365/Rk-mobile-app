import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import { ICategory, ICategoryResponse } from '../interface/home/ICategoryResponse';
import * as ContentService from '../service/ContentService';
import { categoriesFetchFailure, categoriesFetchSuccess, fetchCategories } from '../redux/slices/CategoriesSlice';
import { categoryFetchFailure, categoryFetchSuccess, fetchCategory } from '../redux/slices/CategorySlice';
import { IVideo, IVideoResponse } from '../interface/home/IVideoResponse';
import { fetchVideos, videosFetchFailure, videosFetchSuccess } from '../redux/slices/VideosSlice';
import { fetchVideo, videoFetchFailure, videoFetchSuccess } from '../redux/slices/VideoSlice';
import { setLoginStatus } from '../utils/storage';
import { IBannerResponse } from '../interface/home/IBannerResponse';
import { bannersFetchFailure, bannersFetchSuccess, fetchBanners } from '../redux/slices/BannerSlice';
import { searchVideos, searchVideosFailure, searchVideosSuccess } from '../redux/slices/SearchVideoSlice';
import { categoryVideosFetchFailure, categoryVideosFetchSuccess, fetchCategoeyVideos } from '../redux/slices/CategoryVideosSlice';

/**
 * Category Sagas
 */
export function* categoriesSaga(action: PayloadAction) {
    try {
        const response: ICategoryResponse = yield call(ContentService.fetchCategories);
        console.log('response---22-', JSON.stringify(response));
        if(response.message === 'invalid token') {
            yield setLoginStatus('');
            yield put(categoriesFetchFailure(response.message));
        }
        yield put(categoriesFetchSuccess(response));
    } catch (error) {
        console.log('error----', JSON.stringify(error));
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

export function* categoryVideosSaga(action: PayloadAction<string>) {
    try {
        const response: IVideoResponse = yield call(ContentService.fetchCategoryVideos, action.payload);
        yield put(categoryVideosFetchSuccess(response));
    } catch (error) {
        yield put(categoryVideosFetchFailure(error));
    }
}

export function* searchVideosSaga(action: PayloadAction<string>) {
    try {
        const response: IVideoResponse = yield call(ContentService.searchVideos, action.payload);
        yield put(searchVideosSuccess(response));
    } catch (error) {
        yield put(searchVideosFailure(error));
    }
}

/**
 * Banner Saga
 */
 export function* bannerSaga(action: PayloadAction) {
    try {
        const response: IBannerResponse = yield call(ContentService.fetchBanners);
        yield put(bannersFetchSuccess(response));
    } catch (error) {
        yield put(bannersFetchFailure(error));
    }
}

export function* watcherContentSaga() {
    yield takeLatest(fetchCategories.type, categoriesSaga);
    yield takeLatest(fetchCategory.type, categorySaga);
    yield takeLatest(fetchVideos.type, videosSaga);
    yield takeLatest(fetchCategoeyVideos.type, categoryVideosSaga);
    yield takeLatest(fetchVideo.type, videoSaga);
    yield takeLatest(fetchBanners.type, bannerSaga);
    yield takeLatest(searchVideos.type, searchVideosSaga);

}