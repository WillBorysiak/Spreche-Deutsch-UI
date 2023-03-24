import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import PageHeading from '../../components/generic/typography/PageHeading';
import { sentences } from '../../data/pageData';
import fetcher from '../../helpers/fetcher';
import { CategoryItem } from '../../interfaces/Categories';

const SentencesCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<CategoryItem>();

	const router = useRouter();

	useEffect(() => {
		const category = sentences.items.filter(item => item.url === router.asPath);
		setCurrentCategory(category[0]);
	});

	const { data, error } = useSWR(
		currentCategory?.id ? `http://localhost:8000/sentences/category/${currentCategory?.id}` : null,
		fetcher,
	);

	console.log(data);

	return (
		<section id="sentences-category-page">
			<PageHeading text={currentCategory?.text} />
		</section>
	);
};

export default SentencesCategory;
