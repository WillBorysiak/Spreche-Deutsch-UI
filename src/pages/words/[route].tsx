import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import TranslationTable from '../../components/content/language-page/TranslationTable';
import PageHeading from '../../components/generic/typography/PageHeading';
import { words } from '../../data/pageData';
import { fetcher } from '../../helpers/fetcher';
import { CategoryItem } from '../../interfaces/Categories';
import { useWordsStore } from '../../store/wordsStore';

const WordsCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<CategoryItem>();

	const { wordsData, setWordsData } = useWordsStore();

	const router = useRouter();

	useEffect(() => {
		const category = words.items.filter(item => item.url === router.asPath);
		setCurrentCategory(category[0]);
	}, [router.asPath]);

	const { data, error } = useSWR(
		currentCategory?.id ? `http://localhost:8000/words/category/${currentCategory?.id}` : null,
		fetcher,
	);

	useEffect(() => {
		if (data) setWordsData(data);
	}, [data, wordsData, setWordsData]);

	return (
		<section id="words-category-page">
			<PageHeading text={currentCategory?.text} />
			<TranslationTable data={wordsData} error={error} />
		</section>
	);
};

export default WordsCategory;
