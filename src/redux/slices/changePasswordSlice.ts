import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IChangePasswordResponse} from '../../interface/changePassword/IChangePasswordResponse';
import {IChangePasswordRequest} from '../../interface/changePassword/IChangePasswordRequest';

interface IChangePasswordState {
  changePassword: IChangePasswordResponse | null;
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
}

const initialState: IChangePasswordState = {
  changePassword: null,
  requesting: false,
  success: false,
  failure: false,
  error: null,
};

export const ChangePasswordSlice = createSlice({
  name: 'ChangePasswordSlice',
  initialState: initialState,
  reducers: {
    changePasswordRequest: (
      state,
      action: PayloadAction<IChangePasswordRequest>,
    ) => {
      state.requesting = true;
    },
    changePasswordSuccess: (
      state,
      action: PayloadAction<IChangePasswordResponse>,
    ) => {
      state.requesting = false;
      state.success = true;
      state.changePassword = action.payload;
    },
    changePasswordFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
  },
});

export default ChangePasswordSlice.reducer;

export const {
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
} = ChangePasswordSlice.actions;
