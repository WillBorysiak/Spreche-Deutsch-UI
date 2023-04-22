import Image from 'next/image';
import { useRouter } from 'next/router';

import { CategoryModel } from '../../../models/Category';
import SubHeading from '../../generic/typography/heading/SubHeading';

const Category = (props: { data: CategoryModel; parentRoute: string }) => {
	const {
		data: { name, route },
		parentRoute,
	} = props;

	const router = useRouter();

	return (
		<div
			className="default-transition mx-auto my-5 flex w-full max-w-7xl cursor-pointer flex-row items-center rounded-sm bg-transparentBg hover:scale-105"
			onClick={() => router.push(`/${parentRoute}/${route}`)}
		>
			<Image
				width={250}
				height={250}
				quality={100}
				priority={false}
				alt="gallery"
				src="/images/categories/general.png"
				className="h-40 w-40 md:h-60 md:w-60"
			/>
			<div className="flex w-full justify-center text-center">
				<SubHeading text={name} />
			</div>
		</div>
	);
};

export default Category;
