import { classNames } from '../../../helpers/classNames';
import { CategoryModel } from '../../../models/Category';
import Category from './Category';

const CategoryLayout = (props: { data: CategoryModel[]; parentRoute: string; layout: string }) => {
	const { data, parentRoute, layout } = props;

	return (
		<div
			className={classNames(layout === 'column' ? 'flex flex-col' : 'flex flex-col 2xl:grid 2xl:grid-cols-2', 'gap-3')}
		>
			{data.map((item, index) => (
				<Category key={index} data={item} parentRoute={parentRoute} />
			))}
		</div>
	);
};

export default CategoryLayout;
