import axios from 'axios';
import { type IGetRequestParams } from '@/models';
import { env } from '@/config/env';

export async function getRequest<T>({ location, params, headers }: IGetRequestParams): Promise<T> {
  const response = await axios.get(env.patientsApiUrl + location, {
    params,
    headers,
    paramsSerializer: {
      encode: (params) => params,
    },
  });
  return response.data;
}
