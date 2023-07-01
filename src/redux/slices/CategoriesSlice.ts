import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ICategoryResponse } from '../../interface/home/ICategoryResponse';

interface ICategoriesState {
    categories: ICategoryResponse | Array<[]>;
    requesting: boolean;
    success: boolean;
    failure: boolean;
    error: any;
}

const initialState: ICategoriesState = {
    categories: [],
    requesting: false,
    success: false,
    failure: false,
    error: null,
}

export const CategoriesSlice = createSlice({
    name: 'CategoriesSlice',
    initialState: initialState,
    reducers: {
        fetchCategories: (state, action: PayloadAction) => {
            state.requesting = true;
        },
        categoriesFetchSuccess: (state, action: PayloadAction<ICategoryResponse>) => {
            state.requesting = false;
            state.success = true;
            state.categories = action.payload;
        },
        categoriesFetchFailure: (state, action: PayloadAction<any>) => {
            state.requesting = false;
            state.success = false;
            state.failure = true;
            state.error = action.payload;
        }
    }
});

export default CategoriesSlice.reducer;

export const {fetchCategories, categoriesFetchSuccess, categoriesFetchFailure} = CategoriesSlice.actions;