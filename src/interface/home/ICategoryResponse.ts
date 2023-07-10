import { IVideo } from "./IVideoResponse";

export interface ICategory {
    categoryName: string;
    createdAt: string;
    isActive: boolean;
    isDeleted: boolean;
    updatedAt: string;
    _id: string;
    __v: number;
    allVideos: Array<IVideo>;
}

export interface ICategoryResponse {
    data: Array<ICategory>;
    message: string;
    code: number;
}