import {configureStore, AnyAction, Reducer} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import ForgetPasswordSlice from './slices/ForgetPasswordSlice';
import ChangePasswordSlice from './slices/changePasswordSlice';
import QrimageSlice from './slices/QRimageSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const appReducer = combineReducers({
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
  ForgetPassword: ForgetPasswordSlice,
  ChangePassword: ChangePasswordSlice,
  Qrimage: QrimageSlice,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'SigninSlice/logout') {
    AsyncStorage.removeItem('persist:root');
    state = {} as RootState;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware);
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);
