import axios from 'axios';

import { Word } from '../interfaces/Word';

export async function fetcher(url: string): Promise<Word[]> {
	const response = await axios.get<Word[]>(url);
	return response.data;
}
