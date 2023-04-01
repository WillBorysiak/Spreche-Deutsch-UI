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

	const { data, error } = useSWR(
		currentCategory?.id ? `http://localhost:8000/words/category/${currentCategory?.id}` : null,
		fetcher,
	);

	useEffect(() => {
		if (data) setWordsData(data);
	}, [currentCategory, data]);

	return (
		<AnimatePresence mode="wait">
			<motion.section
				id="words-category-page"
				key={router.asPath}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{ duration: 0.5 }}
				variants={{ initialState: { opacity: 0 }, animateState: { opacity: 1 }, exitState: { opacity: 0 } }}
			>
				<PageHeading text={currentCategory?.text} />
				<TranslationTable data={wordsData} error={error} />
			</motion.section>
		</AnimatePresence>
	);
};

export default WordsCategory;
