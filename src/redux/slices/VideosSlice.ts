import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IVideoResponse } from '../../interface/home/IVideoResponse';

interface IVideosState {
    videos: IVideoResponse | Array<[]>;
    requesting: boolean;
    success: boolean;
    failure: boolean;
    error: any;
}

const initialState: IVideosState = {
    videos: [],
    requesting: false,
    success: false,
    failure: false,
    error: null,
}

export const VideosSlice = createSlice({
    name: 'VideosSlice',
    initialState: initialState,
    reducers: {
        fetchVideos: (state, action: PayloadAction) => {
            state.requesting = true;
        },
        videosFetchSuccess: (state, action: PayloadAction<IVideoResponse>) => {
            state.requesting = false;
            state.success = true;
            state.videos = action.payload;
        },
        videosFetchFailure: (state, action: PayloadAction<any>) => {
            state.requesting = false;
            state.success = false;
            state.failure = true;
            state.error = action.payload;
        }
    }
});

export default VideosSlice.reducer;

export const {fetchVideos, videosFetchSuccess, videosFetchFailure} = VideosSlice.actions;