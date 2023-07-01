import {AxiosResponse} from 'axios';
import {Api} from '../http/Api';
import {CATEGORIES, CATEGORY, SEARCH_VIDEO, VIDEO, VIDEOS} from '../http/Endpoint';
import { ICategory, ICategoryResponse } from '../interface/home/ICategoryResponse';
import { IVideo, IVideoResponse } from '../interface/home/IVideoResponse';

// **** Category Api's ****
export const fetchCategories = async (): Promise<ICategoryResponse> => {
    const api = Api.getInstance();
    return await api.get<ICategoryResponse>(CATEGORIES);
}

export const fetchCategory = async (id: string): Promise<ICategory> => {
    const api = Api.getInstance();
    return await api.get<ICategory>(CATEGORY(id));
}

// **** Video Api's ****
export const fetchVideos = async (): Promise<IVideoResponse> => {
    const api = Api.getInstance();
    return await api.get<IVideoResponse>(VIDEOS);
}

export const fetchVideo = async (id: string): Promise<IVideo> => {
    const api = Api.getInstance();
    return await api.get<IVideo>(VIDEO(id));
}

export const searchVideos = async (title: string): Promise<IVideoResponse> => {
    const api = Api.getInstance();
    return await api.get<IVideoResponse>(SEARCH_VIDEO(title));
}
