import { IDeleteRequestParams } from '@/models';
import axios from 'axios';

export async function deleteRequest<T>({
  location,
  params,
  headers,
}: IDeleteRequestParams): Promise<T> {
  const response = await axios.delete(location, {
    params,
    headers,
  });
  return response.data;
}
