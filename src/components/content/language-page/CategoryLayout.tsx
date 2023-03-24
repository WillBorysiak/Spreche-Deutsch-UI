import { CategoryItem } from '../../../interfaces/Categories';
import Category from './Category';

const CategoryLayout = (props: { data: CategoryItem[]; parentRoute: string }) => {
	const words = props.data;
	const parentRoute = props.parentRoute;

	return (
		<div className="flex flex-col gap-5 md:grid md:grid-cols-2 3xl:grid-cols-3">
			{words.map((item, index) => (
				<Category key={index} data={item} parentRoute={parentRoute} />
			))}
		</div>
	);
};

export default CategoryLayout;
