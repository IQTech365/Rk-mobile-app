import {AxiosResponse} from 'axios';
import {Api} from '../http/Api';
import {PROFILE, SEND_MESSAGE, UPDATE_PROFILE, UPDATE_USER} from '../http/Endpoint';
import { IProfile, IProfileResponse, IProfileUpdateResponse, TProfile } from '../interface/profile/IProfileResponse';
import { IUser, IUserResponse, TUser } from '../interface/user/IUser';

// **** Message Api's ****
export const updateProfile = async (payload: Partial<IProfile>): Promise<any> => {
    const api = Api.getInstance();
    const requestPayload: TProfile = {
        mobile: payload.mobile as string, 
        pincode: payload.pincode as string, 
        state: payload.state as string, 
        city: payload.city as string, 
        address: payload.address as string,
    };
    console.log('requestPayload----', JSON.stringify(requestPayload));
    return await api.update<TProfile, AxiosResponse<IProfileUpdateResponse>>(requestPayload, UPDATE_PROFILE(payload.userId));
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
