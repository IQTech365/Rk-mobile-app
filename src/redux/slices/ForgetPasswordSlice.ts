import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IForgetPasswordResponse} from '../../interface/forgetPassword/IForgetPasswordResponse';
import {IForgetPasswordRequest} from '../../interface/forgetPassword/IForgetPasswordRequest';

interface IForgetpswState {
  forgetPassword: IForgetPasswordResponse | null;
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
}

const initialState: IForgetpswState = {
  forgetPassword: null,
  requesting: false,
  success: false,
  failure: false,
  error: null,
};

export const ForgetPasswordSlice = createSlice({
  name: 'ForgetPasswordSlice',
  initialState: initialState,
  reducers: {
    forgetRequest: (state, action: PayloadAction<IForgetPasswordRequest>) => {
      state.requesting = true;
    },
    forgetSuccess: (state, action: PayloadAction<IForgetPasswordResponse>) => {
      state.requesting = false;
      state.success = true;
      state.forgetPassword = action.payload;
    },
    forgetFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
  },
});

export default ForgetPasswordSlice.reducer;

export const {forgetRequest, forgetSuccess, forgetFailure} =
  ForgetPasswordSlice.actions;
