import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './sagas/rootSaga';
import userReducer from './ducks/user';
import authReducer from './ducks/auth';
import apiReducer from './ducks/api';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  api: apiReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development',
});
sagaMiddleware.run(watcherSaga);

export default store;
