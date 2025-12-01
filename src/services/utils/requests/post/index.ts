import { type IPostRequestParams } from '@/models';
import axios from 'axios';

export const postRequest = async <T>({
  location,
  body,
  params = {},
  headers,
}: IPostRequestParams): Promise<T> => {
  if (!body) throw new Error('POST request requires a body.');

  const response = await axios.post(location, body, {
    params,
    headers,
  });

  return response.data;
};
