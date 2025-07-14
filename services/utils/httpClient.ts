import axios, { AxiosRequestConfig } from "axios";

const cvApiKey = process.env.NEXT_PUBLIC_API_KEY || "";
const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";

interface RequestOptions {
  location: string;
  query?: Record<string, unknown>;
  body?: unknown;
  headers?: Record<string, string>;
  options?: AxiosRequestConfig;
}

class HttpClient {
  jsonHeaders: Record<string, string> = {
    "Content-Type": "application/json;charset=UTF-8",
    "x-api-key": `${cvApiKey}`,
  };

  private buildHeaders(customHeaders?: Record<string, string>) {
    return {
      ...this.jsonHeaders,
      ...(customHeaders || {}),
    };
  }

  public async get<T>({
    location,
    query = {},
    headers,
    options = {},
  }: RequestOptions): Promise<T> {
    const response = await axios.get(baseUrl + location, {
      ...options,
      params: query,
      headers: this.buildHeaders(headers),
      paramsSerializer: {
        encode: (params) => params,
      },
    });
    return response.data;
  }

  public async post<T>({
    location,
    body,
    query = {},
    headers,
    options = {},
  }: RequestOptions): Promise<T> {
    if (!body) throw new Error("POST request requires a body.");
    const response = await axios.post(baseUrl + location, body, {
      ...options,
      params: query,
      headers: this.buildHeaders(headers),
    });
    return response.data;
  }

  public async patch<T>({
    location,
    body,
    query = {},
    headers,
    options = {},
  }: RequestOptions): Promise<T> {
    if (!body) throw new Error("PATCH request requires a body.");
    const response = await axios.patch(baseUrl + location, body, {
      ...options,
      params: query,
      headers: this.buildHeaders(headers),
    });
    return response.data;
  }

  public async delete<T>({
    location,
    query = {},
    headers,
    options = {},
  }: RequestOptions): Promise<T> {
    const response = await axios.delete(baseUrl + location, {
      ...options,
      params: query,
      headers: this.buildHeaders(headers),
    });
    return response.data;
  }
}

const HttpClientInstance = new HttpClient();

export default HttpClientInstance;
