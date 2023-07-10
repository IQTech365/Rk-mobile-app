import {Api} from '../http/Api';
import {BANNER, CATEGORIES, CATEGORY, SEARCH_VIDEO, VIDEO, VIDEOS, VIDEOS_BY_CATEGORY} from '../http/Endpoint';
import { IBannerResponse } from '../interface/home/IBannerResponse';
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

export const fetchCategoryVideos = async (id: string): Promise<IVideoResponse> => {
    const api = Api.getInstance();
    return await api.get<IVideoResponse>(VIDEOS_BY_CATEGORY(id));
}

export const fetchVideo = async (id: string): Promise<IVideo> => {
    const api = Api.getInstance();
    return await api.get<IVideo>(VIDEO(id));
}

export const searchVideos = async (title: string): Promise<IVideoResponse> => {
    const api = Api.getInstance();
    return await api.get<IVideoResponse>(SEARCH_VIDEO(title));
}

// **** Banner Api's ****
export const fetchBanners = async (): Promise<IBannerResponse> => {
    const api = Api.getInstance();
    return await api.get<IBannerResponse>(BANNER);
}
