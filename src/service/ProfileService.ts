import {AxiosResponse} from 'axios';
import {Api} from '../http/Api';
import {PROFILE, SEND_MESSAGE, UPDATE_PROFILE} from '../http/Endpoint';
import { IProfileResponse } from '../interface/profile/IProfileResponse';
import { IProfileUpdateRequest } from '../interface/profile/IProfileUpdateRequest';
import { IProfileUpdateResponse } from '../interface/profile/IProfileUpdateResponse';

// **** Message Api's ****
export const updateProfile = async (payload: IProfileUpdateRequest): Promise<any> => {
    const api = Api.getInstance();
    return await api.post<IProfileUpdateRequest, AxiosResponse<IProfileUpdateResponse>>(payload, UPDATE_PROFILE);
}

export const fetchProfile = async (userId: string): Promise<IProfileResponse> => {
    const api = Api.getInstance();
    return await api.get<IProfileResponse>(PROFILE(userId));
}
