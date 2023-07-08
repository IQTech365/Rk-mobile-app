export interface IUser {
    isVerified: boolean;
    isSubscribed: boolean;
    userId: string;
}

export interface IUserResponse {
    code: number;
    message: string;
}

export type TUser = Pick<IUser, 'isSubscribed'>