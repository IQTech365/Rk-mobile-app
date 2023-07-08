import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {INotificationResponse} from '../../interface/notification/INotification';

interface INotificationState {
  data: INotificationResponse | null;
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
}

const initialState: INotificationState = {
  data: null,
  requesting: false,
  success: false,
  failure: false,
  error: null,
};

export const NotificationSlice = createSlice({
  name: 'NotificationSlice',
  initialState: initialState,
  reducers: {
    fetchNotifications: (state, action: PayloadAction) => {
      state.requesting = true;
    },
    notificationsFetchSuccess: (
      state,
      action: PayloadAction<INotificationResponse>,
    ) => {
      state.requesting = false;
      state.success = true;
      state.data = action.payload;
    },
    notificationsFetchFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
  },
});

export default NotificationSlice.reducer;

export const {
  fetchNotifications,
  notificationsFetchSuccess,
  notificationsFetchFailure,
} = NotificationSlice.actions;
