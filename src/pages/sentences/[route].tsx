import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import PageHeading from '../../components/generic/typography/PageHeading';
import { sentences } from '../../data/pageData';
import { Category } from '../../interfaces/Categories';

const SentencesCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<Category>();

	const router = useRouter();

	useEffect(() => {
		const currentPath = router.asPath;
		const category = sentences.items.find(category => category.url === currentPath);
		setCurrentCategory(category);
	}, [router]);

	return (
		<section id="sentences-category-page">
			<PageHeading text={currentCategory?.text} />
		</section>
	);
};

export default SentencesCategory;
