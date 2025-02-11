import axios, { AxiosResponse } from "axios";

export async function fetcher<T>(url: string): Promise<T> {
  const response: AxiosResponse = await axios.get<T>(url);
  const responseData = response.data;

  return responseData;
}
