import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import PageHeading from '../../components/generic/typography/PageHeading';
import { words } from '../../data/pageData';
import fetcher from '../../helpers/fetcher';
import { CategoryItem } from '../../interfaces/Categories';

const WordsCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<CategoryItem>();

	const router = useRouter();

	useEffect(() => {
		const category = words.items.filter(item => item.url === router.asPath);
		setCurrentCategory(category[0]);
	});

	const { data, error } = useSWR(
		currentCategory?.id ? `http://localhost:8000/words/category/${currentCategory?.id}` : null,
		fetcher,
	);

	return (
		<section id="words-category-page">
			<PageHeading text={currentCategory?.text} />
		</section>
	);
};

export default WordsCategory;
