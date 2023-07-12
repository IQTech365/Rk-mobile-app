import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ICMSResponse } from '../../interface/cms/ICMS';

interface ICMSState {
    data: ICMSResponse | null;
    requesting: boolean;
    success: boolean;
    failure: boolean;
    error: any;
}

const initialState: ICMSState = {
    data: null,
    requesting: false,
    success: false,
    failure: false,
    error: null,
}

export const CMSSlice = createSlice({
    name: 'CMSSlice',
    initialState: initialState,
    reducers: {
        fetchCMSPages: (state, action: PayloadAction) => {
            state.requesting = true;
        },
        cmsPagesFetchSuccess: (state, action: PayloadAction<ICMSResponse>) => {
            state.requesting = false;
            state.success = true;
            state.data = action.payload;
        },
        cmsPagesFetchFailure: (state, action: PayloadAction<any>) => {
            state.requesting = false;
            state.success = false;
            state.failure = true;
            state.error = action.payload;
        }
    }
});

export default CMSSlice.reducer;

export const {fetchCMSPages, cmsPagesFetchSuccess, cmsPagesFetchFailure} = CMSSlice.actions;