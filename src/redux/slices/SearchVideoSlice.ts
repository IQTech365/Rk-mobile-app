import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IVideoResponse } from '../../interface/home/IVideoResponse';

interface ISearchVideoState {
  data: IVideoResponse | null;
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
}

const initialState: ISearchVideoState = {
  data: null,
  requesting: false,
  success: false,
  failure: false,
  error: null,
};

export const SearchVideosSlice = createSlice({
  name: 'SearchVideosSlice',
  initialState: initialState,
  reducers: {
    searchVideos: (state, action: PayloadAction<string>) => {
      state.requesting = true;
    },
    searchVideosSuccess: (
      state,
      action: PayloadAction<IVideoResponse>,
    ) => {
      state.requesting = false;
      state.success = true;
      state.data = action.payload;
    },
    searchVideosFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
  },
});

export default SearchVideosSlice.reducer;

export const {
  searchVideos,
  searchVideosSuccess,
  searchVideosFailure,
} = SearchVideosSlice.actions;
