import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import TranslationTable from '../../components/content/language-page/TranslationTable';
import PageHeading from '../../components/generic/typography/heading/PageHeading';
import { fetcher } from '../../helpers/fetcher';
import { motionVariants } from '../../helpers/framerMotion';
import { Category } from '../../interfaces/Category';
import { useCategoriesStore } from '../../store/categoriesStore';
import { useWordsStore } from '../../store/wordsStore';

const WordsCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<Category>();
	const { categories } = useCategoriesStore();
	const { words, setWords } = useWordsStore();

	const router = useRouter();

	// set current category to local state
	useEffect(() => {
		const currentPath = router.asPath;
		let category;
		if (categories['words'])
			category = categories['words'].find(category => `/words/${category.route}` === currentPath);
		setCurrentCategory(category);
	}, [router]);

	const shouldFetch = () => {
		if (!currentCategory?.index) return false;
		return !words[currentCategory.index];
	};

	const { data, isLoading, error } = useSWR(
		shouldFetch() ? `http://localhost:8000/words/category/${currentCategory?.route}` : null,
		fetcher,
	);

	useEffect(() => {
		if (data) setWords(data);
	}, [data]);

	const currentWords = () => {
		if (currentCategory?.index) return words[currentCategory?.route] || [];
	};

	return (
		<AnimatePresence mode="wait">
			<motion.section
				key={router.asPath}
				id="words-category-page"
				className="py-5"
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{ duration: 0.5 }}
				variants={motionVariants}
			>
				<PageHeading text={currentCategory?.name} mobile={true} />
				<div className="mt-5" />
				<TranslationTable data={currentWords()} type={currentCategory?.type} />
			</motion.section>
		</AnimatePresence>
	);
};

export default WordsCategory;
