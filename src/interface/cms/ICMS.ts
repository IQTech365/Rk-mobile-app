export interface ICMS {
    pageTitle: string;
    pageDescription: string;
}

export interface ICMSResponse {
    data: Array<ICMS> | [];
    message: string;
    code: number;
}