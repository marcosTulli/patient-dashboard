interface IBaseRequestParams {
  location: string;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export type IGetRequestParams = IBaseRequestParams;
export type IDeleteRequestParams = IBaseRequestParams;

export interface IPostRequestParams extends IBaseRequestParams {
  body: unknown;
}

export interface IPatchRequestParams extends IBaseRequestParams {
  body: unknown;
  params?: Record<string, unknown>;
}
