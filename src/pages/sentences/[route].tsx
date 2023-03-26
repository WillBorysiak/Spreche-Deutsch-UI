import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import PageHeading from '../../components/generic/typography/PageHeading';
import { sentences } from '../../data/pageData';
import { CategoryItem } from '../../interfaces/Categories';

const SentencesCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<CategoryItem>();

	const router = useRouter();

	useEffect(() => {
		const category = sentences.items.filter(item => item.url === router.asPath);
		setCurrentCategory(category[0]);
	}, [router.asPath]);

	return (
		<section id="sentences-category-page">
			<PageHeading text={currentCategory?.text} />
		</section>
	);
};

export default SentencesCategory;
