import { CategoryItem } from '../../../interfaces/Categories';
import Category from './Category';

const CategoryLayout = (props: { data: CategoryItem[] }) => {
	const words = props.data;
	return (
		<div className="flex flex-col gap-5 md:grid md:grid-cols-2 3xl:grid-cols-3">
			{words.map((item, index) => (
				<Category key={index} data={item} />
			))}
		</div>
	);
};

export default CategoryLayout;
