export interface IBanner {
    isActive: boolean,
    isDeleted: boolean,
    _id: string,
    bannerTitle: string,
    categoryId: string,
    bannerImageURL: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}

export interface IBannerResponse {
    data: Array<IBanner> | null;
    message: string;
    code: number;
}