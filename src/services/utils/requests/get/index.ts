import axios from "axios";
import { IGetRequestParams } from "@/models";

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";

export async function getRequest<T>({
  location,
  params,
  headers,
}: IGetRequestParams): Promise<T> {
  const response = await axios.get(baseUrl + location, {
    params,
    headers,
    paramsSerializer: {
      encode: (params) => params,
    },
  });
  return response.data;
}