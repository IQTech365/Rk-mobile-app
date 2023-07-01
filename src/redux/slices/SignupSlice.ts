import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ISigninRequest } from '../../interface/signin/ISigninRequest';
import { ISigninResponse } from '../../interface/signin/ISigninResponse';
import { ISignupResponse } from '../../interface/signup/ISignupResponse';

interface ISignupState {
    signupResult: ISignupResponse | null;
    requesting: boolean;
    success: boolean;
    failure: boolean;
    error: any;
}

const initialState: ISignupState = {
    signupResult: null,
    requesting: false,
    success: false,
    failure: false,
    error: null,
}

export const SignupSlice = createSlice({
    name: 'SignupSlice',
    initialState: initialState,
    reducers: {
        signupRequest: (state, action: PayloadAction<ISigninRequest>) => {
            state.requesting = true;
        },
        signupSuccess: (state, action: PayloadAction<ISignupResponse>) => {
            state.requesting = false;
            state.success = true;
            state.signupResult = action.payload;
        },
        signupFailure: (state, action: PayloadAction<any>) => {
            state.requesting = false;
            state.success = false;
            state.failure = true;
            state.error = action.payload;
        }
    }
});

export default SignupSlice.reducer;

export const {signupRequest, signupSuccess, signupFailure} = SignupSlice.actions;