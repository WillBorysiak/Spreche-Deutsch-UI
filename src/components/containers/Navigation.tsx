import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { motionVariants } from '../../helpers/framerMotion';
import { useCategoriesStore } from '../../store/categoriesStore';
import SiteHeading from '../generic/typography/heading/SiteHeading';
import NavigationItem from '../navigation/NavigationItem';

const Navigation = () => {
	const [loaded, setLoaded] = useState(false);
	const { categories } = useCategoriesStore();

	const router = useRouter();

	// checks if categories are loaded
	useEffect(() => {
		if (Object.keys(categories).length === 0) return;
		else setLoaded(true);
	}, [categories]);

	return (
		<motion.nav
			id="navigation"
			className="flex flex-col py-10 pl-10 pr-5"
			initial="initialState"
			animate="animateState"
			exit="exitState"
			transition={{ duration: 2 }}
			variants={motionVariants}
		>
			<span className="mb-10 hidden cursor-pointer text-center lg:block" onClick={() => router.push('/')}>
				<SiteHeading text="Spreche Deutsch" />
			</span>

			{loaded && (
				<div id="navigation-container">
					<NavigationItem data={categories['words']} />
					<NavigationItem data={categories['sentences']} />
					<NavigationItem data={categories['concepts']} />
					<NavigationItem data={categories['resources']} />
				</div>
			)}
		</motion.nav>
	);
};

export default Navigation;
