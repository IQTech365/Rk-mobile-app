import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IBannerResponse } from '../../interface/home/IBannerResponse';

interface IBannerState {
    data: IBannerResponse | null;
    requesting: boolean;
    success: boolean;
    failure: boolean;
    error: any;
}

const initialState: IBannerState = {
    data: null,
    requesting: false,
    success: false,
    failure: false,
    error: null,
}

export const BannersSlice = createSlice({
    name: 'BannersSlice',
    initialState: initialState,
    reducers: {
        fetchBanners: (state, action: PayloadAction) => {
            state.requesting = true;
        },
        bannersFetchSuccess: (state, action: PayloadAction<IBannerResponse>) => {
            state.requesting = false;
            state.success = true;
            state.data = action.payload;
        },
        bannersFetchFailure: (state, action: PayloadAction<any>) => {
            state.requesting = false;
            state.success = false;
            state.failure = true;
            state.error = action.payload;
        }
    }
});

export default BannersSlice.reducer;

export const {fetchBanners, bannersFetchSuccess, bannersFetchFailure} = BannersSlice.actions;