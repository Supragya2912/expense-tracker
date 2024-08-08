export interface IApiResponse<T> {
    data: T;
    message?: string;
    statusCode?: number;
}
