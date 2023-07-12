import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

//Root Saga
import {rootSaga} from '../sagas';

//Slices
import SigninSlice from './slices/SigninSlice';
import SignupSlice from './slices/SignupSlice';
import VideosSlice from './slices/VideosSlice';
import VideoSlice from './slices/VideoSlice';
import CategoriesSlice from './slices/CategoriesSlice';
import CategorySlice from './slices/CategorySlice';
import MessageSlice from './slices/MessageSlice';
import ProfileSlice from './slices/ProfileSlice';
import BannerSlice from './slices/BannerSlice';
import NotificationSlice from './slices/NotificationSlice';
import SearchVideoSlice from './slices/SearchVideoSlice';
import CategoryVideosSlice from './slices/CategoryVideosSlice';
import CMSSlice from './slices/CMSSlice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: {
        Signin: SigninSlice,
        Signup: SignupSlice,
        Categories: CategoriesSlice,
        Category: CategorySlice,
        Videos: VideosSlice,
        video: VideoSlice,
        Message: MessageSlice,
        Profile: ProfileSlice,
        Banners: BannerSlice,
        Notification: NotificationSlice,
        SearchVideo: SearchVideoSlice,
        CategoryVideos: CategoryVideosSlice,
        CMS: CMSSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat(middleware);
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
