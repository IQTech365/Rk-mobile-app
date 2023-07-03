export interface ICategory {
    categoryName: string;
    createdAt: string;
    isActive: boolean;
    isDeleted: boolean;
    updatedAt: string;
    _id: string;
    __v: number;
}

export interface ICategoryResponse {
    data: Array<ICategory>;
    message: string;
    code: number;
}