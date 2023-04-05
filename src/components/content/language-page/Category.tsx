import Image from 'next/image';
import { useRouter } from 'next/router';

import { Category } from '../../../interfaces/Category';
import SubHeading from '../../generic/typography/SubHeading';

const Category = (props: { key: number; data: Category; parentRoute: string }) => {
	const { name, route } = props.data;
	const parentRoute = props.parentRoute;

	const router = useRouter();

	return (
		<div
			className="relative mx-auto my-5 flex h-fit w-[350px] max-w-7xl cursor-pointer flex-row items-center rounded-sm bg-transparentBg xl:w-[400px]"
			onClick={() => router.push(`/${parentRoute}/${route}`)}
		>
			<Image
				width={200}
				height={200}
				quality={100}
				priority={false}
				alt="gallery"
				src="/images/gallery/meduana-PdnseHuDFZU-unsplash.jpg"
			/>
			<div className="flex w-full justify-center">
				<SubHeading text={name} />
			</div>
		</div>
	);
};

export default Category;
