export interface IProfile {
    username: string;
    email: string;
    mobile: string;
    city: string;
    state: string;
    pincode: string;
    address: string;
    isVerified: string;
    isSubscribed: string;
    zoomLink: string;
    userId: string;
}

export interface IProfileResponse {
    data: IProfile;
    message: string;
    code: number;
}

export interface IProfileUpdateResponse {
    data: null;
    message: string;
    code: number;
}

export type TProfile = Omit<IProfile, "userId" | "username" | "email" | "isVerified" | "isSubscribed" | "zoomLink">;