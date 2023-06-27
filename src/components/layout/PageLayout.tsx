import { useEffect } from 'react';
import useSWR from 'swr';

import { fetcher } from '../../helpers/fetcher';
import { CategoryModel } from '../../models/Category.model';
import { CategoryStoreItem, useCategoriesStore } from '../../store/categoriesStore';

const PageLayout = (props: { children: React.ReactNode }) => {
	const { children } = props;

	const { setCategories } = useCategoriesStore();

	const { data } = useSWR('http://localhost:8000/categories', fetcher);

	// pushes categories into the store
	useEffect(() => {
		if (data) {
			const categories: CategoryStoreItem = data.reduce((acc: CategoryStoreItem, item: CategoryModel) => {
				const type = item.type;
				if (!acc[type]) acc[type] = [];
				acc[type].push(item);
				return acc;
			}, {});
			setCategories(categories);
		}
	}, [data, setCategories]);

	return (
		<div id="page-layout" className="flex w-screen flex-col lg:h-screen lg:flex-row">
			{children}
		</div>
	);
};

export default PageLayout;
