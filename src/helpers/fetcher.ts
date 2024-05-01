import axios from "axios";

type Fetcher<Data> = (url: string) => Promise<Data>;

export async function fetcher<T>(url: string): Promise<T> {
  const response = await axios.get<T>(url);
  return response.data;
}
