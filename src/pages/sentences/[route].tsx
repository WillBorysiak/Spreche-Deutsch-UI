import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import TranslationTable from '../../components/content/language-page/TranslationTable';
import PageHeading from '../../components/generic/typography/PageHeading';
import { fetcher } from '../../helpers/fetcher';
import { motionVariants } from '../../helpers/framerMotion';
import { Category } from '../../interfaces/Category';
import { useCategoriesStore } from '../../store/categoriesStore';
import { useSentencesStore } from '../../store/sentencesStore';

const SentencesCategory: NextPage = () => {
	const [currentCategory, setCurrentCategory] = useState<Category>();
	const { categories } = useCategoriesStore();
	const { sentences, setSentences } = useSentencesStore();

	const router = useRouter();

	// set current category to local state
	useEffect(() => {
		const currentPath = router.asPath;
		let category;
		if (categories['sentences'])
			category = categories['sentences'].find(category => `/sentences/${category.route}` === currentPath);
		setCurrentCategory(category);
	}, [router]);

	const shouldFetch = () => {
		if (!currentCategory?.index) return false;
		return !sentences[currentCategory.index];
	};

	const { data, isLoading, error } = useSWR(
		shouldFetch() ? `http://localhost:8000/sentences/category/${currentCategory?.route}` : null,
		fetcher,
	);

	useEffect(() => {
		if (data) setSentences(data);
	}, [data]);

	const currentSentences = () => {
		if (currentCategory?.index) return sentences[currentCategory?.route] || [];
	};

	return (
		<AnimatePresence mode="wait">
			<motion.section
				id="sentences-category-page"
				className="max-w-8xl text-center"
				key={router.asPath}
				initial="initialState"
				animate="animateState"
				exit="exitState"
				transition={{ duration: 0.5 }}
				variants={motionVariants}
			>
				<PageHeading text={currentCategory?.name} />
				<TranslationTable data={currentSentences()} />
			</motion.section>
		</AnimatePresence>
	);
};

export default SentencesCategory;
