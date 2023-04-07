import { useEffect } from 'react';
import useSWR from 'swr';

import { fetcher } from '../../helpers/fetcher';
import { Category } from '../../interfaces/Category';
import { useCategoriesStore, CategoryStoreItem } from '../../store/categoriesStore';

interface LayoutPropTypes {
	children: React.ReactNode;
}

const PageLayout = (props: LayoutPropTypes) => {
	const { setCategories } = useCategoriesStore();

	const { data } = useSWR('http://localhost:8000/categories', fetcher);

	// pushes categories into the store
	useEffect(() => {
		if (data) {
			const categories: CategoryStoreItem = data.reduce((acc: CategoryStoreItem, item: Category) => {
				const type = item.type;
				if (!acc[type]) acc[type] = [];
				acc[type].push(item);
				return acc;
			}, {});
			setCategories(categories);
		}
	}, [data]);

	return (
		<div id="page-layout" className="flex w-screen flex-col lg:h-screen lg:flex-row">
			{props.children}
		</div>
	);
};

export default PageLayout;
