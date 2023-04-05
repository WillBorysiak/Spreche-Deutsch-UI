import axios from 'axios';

export async function fetcher(url: string): Promise<[]> {
	const response = await axios.get(url);
	return response.data;
}
