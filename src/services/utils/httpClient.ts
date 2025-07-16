import {
  IDeleteRequestParams,
  IGetRequestParams,
  IPatchRequestParams,
  IPostRequestParams,
} from '@/models';
import {
  getRequest,
  patchRequest,
  postRequest,
  deleteRequest,
} from './requests';

class HttpClient {
  private jsonHeaders: Record<string, string> = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
  };

  private buildHeaders(
    customHeaders?: Record<string, string>,
    withToken?: boolean,
  ) {
    const authToken = localStorage.getItem('authToken');
    const tokenHeaders = withToken
      ? { Authorization: `Bearer ${authToken}` }
      : {};
    return {
      ...this.jsonHeaders,
      ...tokenHeaders,
      ...(customHeaders || {}),
    } as Record<string, string>;
  }

  public async get<T>(params: IGetRequestParams): Promise<T> {
    const headers = this.buildHeaders(params.headers);
    return getRequest<T>({
      ...params,
      headers,
    });
  }

  public async post<T>(params: IPostRequestParams): Promise<T> {
    const headers = this.buildHeaders(params.headers, true);
    return postRequest<T>({
      ...params,
      headers,
    });
  }

  public async patch<T>(params: IPatchRequestParams): Promise<T> {
    const headers = this.buildHeaders(params.headers, true);
    return patchRequest<T>({
      ...params,
      headers,
    });
  }

  public async delete<T>(params: IDeleteRequestParams): Promise<T> {
    const headers = this.buildHeaders(params.headers, true);
    return deleteRequest<T>({
      ...params,
      headers,
    });
  }
}

const HttpClientInstance = new HttpClient();

export default HttpClientInstance;
