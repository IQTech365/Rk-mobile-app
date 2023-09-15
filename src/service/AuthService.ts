import {AxiosResponse} from 'axios';
import {Api} from '../http/Api';
import {CHANGEPWD, FORGETPWD, SIGNIN, SIGNUP} from '../http/Endpoint';
import { ISigninRequest } from '../interface/signin/ISigninRequest';
import { ISigninResponse } from '../interface/signin/ISigninResponse';
import { ISignupRequest } from '../interface/signup/ISignupRequest';
import { ISignupResponse } from '../interface/signup/ISignupResponse';
import { IForgetPasswordRequest } from '../interface/forgetPassword/IForgetPasswordRequest';
import { IForgetPasswordResponse } from '../interface/forgetPassword/IForgetPasswordResponse';
import { IChangePasswordRequest } from '../interface/changePassword/IChangePasswordRequest';
import { IChangePasswordResponse } from '../interface/changePassword/IChangePasswordResponse';

export const SigninService = async (payload: ISigninRequest): Promise<ISigninResponse> => {
    const api = Api.getInstance();
    return await api.post<ISigninRequest, AxiosResponse<ISigninResponse>>(payload, SIGNIN);
}

export const SignupService = async (payload: ISignupRequest): Promise<ISignupResponse> => {
    const api = Api.getInstance();
    return await api.post<ISignupRequest, AxiosResponse<ISignupResponse>>(payload, SIGNUP);
}

export const ForgetPasswordService = async (payload: IForgetPasswordRequest): Promise<IForgetPasswordResponse> => {
    const api = Api.getInstance();
    return await api.post<IForgetPasswordRequest, AxiosResponse<IForgetPasswordResponse>>(payload, FORGETPWD);
}

export const ChangePasswordService = async (payload: IChangePasswordRequest): Promise<IChangePasswordResponse> => {
    const api = Api.getInstance();
    return await api.post<IChangePasswordRequest, AxiosResponse<IChangePasswordResponse>>(payload, CHANGEPWD);
}