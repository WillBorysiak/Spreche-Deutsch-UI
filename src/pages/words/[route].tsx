import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import TranslationTable from '../../components/content/language-page/TranslationTable';
import PageHeading from '../../components/generic/typography/PageHeading';
import { words } from '../../data/pageData';
import { fetcher } from '../../helpers/fetcher';
import { Category } from '../../interfaces/Categories';
import { useWordsStore } from '../../store/wordsStore';

const WordsCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<Category>();
	const { wordsData, setWordsData } = useWordsStore();

	const router = useRouter();

	useEffect(() => {
		const currentPath = router.asPath;
		const category = words.items.find(category => category.url === currentPath);
		setCurrentCategory(category);
	}, [router]);

	const shouldFetch = () => {
		if (!currentCategory?.index) return false;
		return !wordsData[currentCategory.index];
	};

	const { data, isLoading, error } = useSWR(
		shouldFetch() ? `http://localhost:8000/words/category/${currentCategory?.index}` : null,
		fetcher,
	);

	useEffect(() => {
		if (data) setWordsData(data);
	}, [data]);

	const currentWordsData = () => {
		if (currentCategory?.index) return wordsData[currentCategory?.index] || [];
	};

	return (
		<AnimatePresence mode="wait">
			<motion.section
				id="words-category-page"
				className="max-w-8xl text-center"
				key={router.asPath}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{ duration: 0.5 }}
				variants={{ initialState: { opacity: 0 }, animateState: { opacity: 1 }, exitState: { opacity: 0 } }}
			>
				<PageHeading text={currentCategory?.text} />
				<TranslationTable data={currentWordsData()} loading={isLoading} error={error} />
			</motion.section>
		</AnimatePresence>
	);
};

export default WordsCategory;
