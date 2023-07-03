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
