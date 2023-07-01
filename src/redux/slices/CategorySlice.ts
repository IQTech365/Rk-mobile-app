import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ICategory } from '../../interface/home/ICategoryResponse';

interface ICategoryState {
    category: ICategory | null;
    requesting: boolean;
    success: boolean;
    failure: boolean;
    error: any;
}

const initialState: ICategoryState = {
    category: null,
    requesting: false,
    success: false,
    failure: false,
    error: null,
}

export const CategorySlice = createSlice({
    name: 'CategorySlice',
    initialState: initialState,
    reducers: {
        fetchCategory: (state, action: PayloadAction) => {
            state.requesting = true;
        },
        categoryFetchSuccess: (state, action: PayloadAction<ICategory>) => {
            state.requesting = false;
            state.success = true;
            state.category = action.payload;
        },
        categoryFetchFailure: (state, action: PayloadAction<any>) => {
            state.requesting = false;
            state.success = false;
            state.failure = true;
            state.error = action.payload;
        }
    }
});

export default CategorySlice.reducer;

export const {fetchCategory, categoryFetchSuccess, categoryFetchFailure} = CategorySlice.actions;