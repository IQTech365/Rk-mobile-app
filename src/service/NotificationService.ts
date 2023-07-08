import {Api} from '../http/Api';
import {NOTIFICATION} from '../http/Endpoint';
import { INotificationResponse } from '../interface/notification/INotification';

export const getNotifications = async (): Promise<INotificationResponse> => {
    const api = Api.getInstance();
    return await api.get<INotificationResponse>(NOTIFICATION);
}
