import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IVideoResponse} from '../../interface/home/IVideoResponse';

interface ICategoryVideosState {
  data: IVideoResponse | null;
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
}

const initialState: ICategoryVideosState = {
  data: null,
  requesting: false,
  success: false,
  failure: false,
  error: null,
};

export const CategoryVideosSlice = createSlice({
  name: 'CategoryVideosSlice',
  initialState: initialState,
  reducers: {
    fetchCategoeyVideos: (state, action: PayloadAction<string>) => {
      state.requesting = true;
    },
    categoryVideosFetchSuccess: (
      state,
      action: PayloadAction<IVideoResponse>,
    ) => {
      state.requesting = false;
      state.success = true;
      state.data = action.payload;
    },
    categoryVideosFetchFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
  },
});

export default CategoryVideosSlice.reducer;

export const {
  fetchCategoeyVideos,
  categoryVideosFetchSuccess,
  categoryVideosFetchFailure,
} = CategoryVideosSlice.actions;
