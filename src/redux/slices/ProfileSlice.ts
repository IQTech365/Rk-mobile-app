import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProfile, IProfileResponse, IProfileUpdateResponse} from '../../interface/profile/IProfileResponse';
import { IUser, IUserResponse } from '../../interface/user/IUser';

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
  //
  userInfoUpdating: boolean;
  userInfoUpdateSuccess: boolean;
  userInfoUpdateFailure: boolean;
  userInfoUpdateError: any;
  userInfoUpdateData: IUserResponse | null;
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
  userInfoUpdating: false,
  userInfoUpdateSuccess: false,
  userInfoUpdateFailure: false,
  userInfoUpdateError: null,
  userInfoUpdateData: null,
};

export const ProfileSlice = createSlice({
  name: 'ProfileSlice',
  initialState: initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<IProfile>>) => {
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
    updateUser: (state, action: PayloadAction<IUser>) => {
      state.userInfoUpdating = true;
    },
    updateUserSuccess: (
      state,
      action: PayloadAction<IUserResponse>,
    ) => {
      state.userInfoUpdating = false;
      state.userInfoUpdateSuccess = true;
      state.userInfoUpdateData = action.payload;
      state.userInfoUpdateError = null;
    },
    updateUserFailure: (state, action: PayloadAction<any>) => {
      state.userInfoUpdating = false;
      state.userInfoUpdateSuccess = false;
      state.userInfoUpdateFailure = true;
      state.userInfoUpdateError = action.payload;
    },
    resetUpdateUser: (state) => {
      state.userInfoUpdating = false;
      state.userInfoUpdateSuccess = false;
      state.userInfoUpdateFailure = false;
      state.userInfoUpdateError = null;
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
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  resetUpdateUser
} = ProfileSlice.actions;
