import {AxiosResponse} from 'axios';
import {Api} from '../http/Api';
import {PROFILE, SEND_MESSAGE, UPDATE_PROFILE, UPDATE_USER} from '../http/Endpoint';
import { IProfileResponse } from '../interface/profile/IProfileResponse';
import { IProfileUpdateRequest } from '../interface/profile/IProfileUpdateRequest';
import { IProfileUpdateResponse } from '../interface/profile/IProfileUpdateResponse';
import { IUser, IUserResponse, TUser } from '../interface/user/IUser';

// **** Message Api's ****
export const updateProfile = async (payload: IProfileUpdateRequest): Promise<any> => {
    const api = Api.getInstance();
    return await api.post<IProfileUpdateRequest, AxiosResponse<IProfileUpdateResponse>>(payload, UPDATE_PROFILE);
}

export const fetchProfile = async (userId: string): Promise<IProfileResponse> => {
    const api = Api.getInstance();
    return await api.get<IProfileResponse>(PROFILE(userId));
}

export const updateUserSubscription = async (payload: IUser): Promise<any> => {
    console.log('payload----', JSON.stringify(payload));
    const api = Api.getInstance();
    const requestPayload: TUser = {isSubscribed: payload.isSubscribed};
    console.log('requestPayload----', JSON.stringify(requestPayload));
    return await api.update<TUser, AxiosResponse<IUserResponse>>(requestPayload, UPDATE_USER(payload.userId));
}
