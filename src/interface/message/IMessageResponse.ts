import { IMessage } from "./IMessage";

export interface IMessageResponse {
    data: Array<IMessage> | null;
    message: string;
    code: number;
}