import axios from "axios";

import { IWord } from "../interfaces/IWord";

export async function fetcher(url: string): Promise<IWord[]> {
  const response = await axios.get(url);
  return response.data;
}
