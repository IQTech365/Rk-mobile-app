import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IVideo } from '../../interface/home/IVideoResponse';

interface IVideoState {
    video: IVideo | null;
    requesting: boolean;
    success: boolean;
    failure: boolean;
    error: any;
}

const initialState: IVideoState = {
    video: null,
    requesting: false,
    success: false,
    failure: false,
    error: null,
}

export const VideoSlice = createSlice({
    name: 'VideoSlice',
    initialState: initialState,
    reducers: {
        fetchVideo: (state, action: PayloadAction) => {
            state.requesting = true;
        },
        videoFetchSuccess: (state, action: PayloadAction<IVideo>) => {
            state.requesting = false;
            state.success = true;
            state.video = action.payload;
        },
        videoFetchFailure: (state, action: PayloadAction<any>) => {
            state.requesting = false;
            state.success = false;
            state.failure = true;
            state.error = action.payload;
        }
    }
});

export default VideoSlice.reducer;

export const {fetchVideo, videoFetchSuccess, videoFetchFailure} = VideoSlice.actions;