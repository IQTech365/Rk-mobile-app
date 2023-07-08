export interface INotification {

}

export interface INotificationResponse {
    data: Array<INotification>;
    message: string;
    code: number;
}