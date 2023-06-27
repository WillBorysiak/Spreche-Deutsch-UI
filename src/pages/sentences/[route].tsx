import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import TranslationTable from '../../components/content/language-page/TranslationTable';
import PageHeading from '../../components/generic/typography/heading/PageHeading';
import { fetcher } from '../../helpers/fetcher';
import { motionVariants } from '../../helpers/framerMotion';
import { CategoryModel } from '../../models/Category.model';
import { useCategoriesStore } from '../../store/categoriesStore';
import { useSentencesStore } from '../../store/sentencesStore';

const SentencesCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<CategoryModel>();
	const { categories } = useCategoriesStore();
	const { sentences, setSentences } = useSentencesStore();

	const router = useRouter();

	// set current category to local state
	useEffect(() => {
		let category;
		if (categories['sentences'])
			category = categories['sentences'].find(category => `/sentences/${category.route}` === router.asPath);
		setCurrentCategory(category);
	}, [router, categories]);

	const shouldFetch = () => {
		if (!currentCategory) return false;
		const categoryKey = currentCategory.name.toLowerCase();
		return !sentences[categoryKey];
	};

	const { data, isLoading, error } = useSWR(
		shouldFetch() ? `http://localhost:8000/sentences/category/${currentCategory?.route}` : null,
		fetcher,
	);

	useEffect(() => {
		if (data) setSentences(data);
	}, [data, setSentences]);

	const currentSentences = () => {
		if (currentCategory) return sentences[currentCategory?.route] || [];
	};

	return (
		<AnimatePresence mode="wait">
			<motion.section
				id="sentences-category-page"
				className="py-3"
				key={router.asPath}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{ duration: 0.5 }}
				variants={motionVariants}
			>
				<PageHeading text={currentCategory?.name} mobile={true} />
				<TranslationTable data={currentSentences()} type={currentCategory?.type} />
			</motion.section>
		</AnimatePresence>
	);
};

export default SentencesCategory;
