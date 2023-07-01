import {AxiosResponse} from 'axios';
import {Api} from '../http/Api';
import {SIGNIN, SIGNUP} from '../http/Endpoint';
import { ISigninRequest } from '../interface/signin/ISigninRequest';
import { ISigninResponse } from '../interface/signin/ISigninResponse';
import { ISignupRequest } from '../interface/signup/ISignupRequest';
import { ISignupResponse } from '../interface/signup/ISignupResponse';

export const SigninService = async (payload: ISigninRequest): Promise<ISigninResponse> => {
    const api = Api.getInstance();
    return await api.post<ISigninRequest, AxiosResponse<ISigninResponse>>(payload, SIGNIN);
}

export const SignupService = async (payload: ISignupRequest): Promise<ISignupResponse> => {
    const api = Api.getInstance();
    return await api.post<ISignupRequest, AxiosResponse<ISignupResponse>>(payload, SIGNUP);
}