import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProfileResponse} from '../../interface/profile/IProfileResponse';
import {IProfileUpdateRequest} from '../../interface/profile/IProfileUpdateRequest';
import {IProfileUpdateResponse} from '../../interface/profile/IProfileUpdateResponse';

interface IProfileState {
  data: IProfileUpdateResponse | null;
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
  //
  profileData: IProfileResponse | null;
  fetchProfileRequesting: boolean;
  fetchProfileSuccess: boolean;
  fetchProfileFailure: boolean;
  fetchProfileError: any;
}

const initialState: IProfileState = {
  data: null,
  requesting: false,
  success: false,
  failure: false,
  error: null,
  profileData: null,
  fetchProfileRequesting: false,
  fetchProfileSuccess: false,
  fetchProfileFailure: false,
  fetchProfileError: null,
};

export const ProfileSlice = createSlice({
  name: 'ProfileSlice',
  initialState: initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<IProfileUpdateRequest>) => {
      state.requesting = true;
    },
    updateProfileSuccess: (
      state,
      action: PayloadAction<IProfileUpdateResponse>,
    ) => {
      state.requesting = false;
      state.success = true;
      state.data = action.payload;
    },
    updateProfileFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
    resetUpdateProfile: (state) => {
      state.requesting = false;
      state.success = false;
      state.failure = false;
      state.error = null;
    },
    fetchProfile: (state, action: PayloadAction<string>) => {
      state.fetchProfileRequesting = true;
    },
    fetchProfileSuccess: (state, action: PayloadAction<IProfileResponse>) => {
      state.fetchProfileRequesting = false;
      state.fetchProfileSuccess = true;
      state.profileData = action.payload;
    },
    fetchProfileFailure: (state, action: PayloadAction<any>) => {
      state.fetchProfileRequesting = false;
      state.fetchProfileSuccess = false;
      state.fetchProfileFailure = true;
      state.fetchProfileError = action.payload;
      state.error = action.payload;
    },
  },
});

export default ProfileSlice.reducer;

export const {
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,
  resetUpdateProfile,
  fetchProfile,
  fetchProfileSuccess,
  fetchProfileFailure,
} = ProfileSlice.actions;
