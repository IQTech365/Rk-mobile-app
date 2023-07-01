import {AxiosResponse} from 'axios';
import {Api} from '../http/Api';
import {CATEGORIES, CATEGORY, MESSAGES, SEARCH_VIDEO, SEND_MESSAGE, VIDEO, VIDEOS} from '../http/Endpoint';
import { ICategory, ICategoryResponse } from '../interface/home/ICategoryResponse';
import { IVideo, IVideoResponse } from '../interface/home/IVideoResponse';
import { IMessage } from '../interface/message/IMessage';
import { ISendMessage } from '../interface/message/ISendMessage';

// **** Message Api's ****
export const sendMessage = async (payload: ISendMessage): Promise<any> => {
    const api = Api.getInstance();
    return await api.post<ISendMessage, AxiosResponse<any>>(payload, SEND_MESSAGE);
}

export const fetchMessages = async (id: string): Promise<Array<IMessage>> => {
    const api = Api.getInstance();
    return await api.get<Array<IMessage>>(MESSAGES(id));
}
