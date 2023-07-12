export interface IMessage {
    userId: string;
    message: string;
    messageId: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    postedBy: string;
    _id: string;
    __v: number;
}