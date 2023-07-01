interface ISigninData {
    isVerified: boolean;
    isSubscribed: boolean;
    otp: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    id: string;
}
export interface ISigninResponse {
    token: string;
    data: ISigninData;
    message: string;
    code: number;
}