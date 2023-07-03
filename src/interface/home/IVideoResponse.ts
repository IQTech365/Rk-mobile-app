export interface IVideo {
    isActive: boolean,
    isDeleted: boolean,
    _id: string,
    videoTitle: string,
    categoryId: string,
    videoURL: string,
    videoThumbnail: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}
export interface IVideoResponse {
    data: Array<IVideo>;
    message: string;
    code: number;
}