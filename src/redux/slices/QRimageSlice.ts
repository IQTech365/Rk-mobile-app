import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IChangePasswordResponse} from '../../interface/changePassword/IChangePasswordResponse';
import {IChangePasswordRequest} from '../../interface/changePassword/IChangePasswordRequest';

interface IQrImageState {
    qrImage: any | null;
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
}

const initialState: IQrImageState = {
    qrImage: null,
  requesting: false,
  success: false,
  failure: false,
  error: null,
};

export const QRimageSlice = createSlice({
  name: 'QRimageSlice',
  initialState: initialState,
  reducers: {
    qrimageRequest: (state) => {
      state.requesting = true;
    },
    qrimageSuccess: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = true;
        state.qrImage = action.payload;
    },
    qrimageFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
  },
});

export default QRimageSlice.reducer;

export const {qrimageRequest, qrimageSuccess, qrimageFailure} =
  QRimageSlice.actions;
