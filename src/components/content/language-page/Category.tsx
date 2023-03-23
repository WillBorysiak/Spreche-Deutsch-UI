import React from 'react';
import Image from 'next/image';
import { CategoryItem } from '../../../interfaces/Categories';
import SubHeading from '../../generic/typography/SubHeading';

const Category = (props: { key: number; data: CategoryItem }) => {
	const { text } = props.data;

	return (
		<article className="relative mx-auto my-5 flex h-fit w-[350px] max-w-7xl flex-row items-center rounded-sm bg-transparentBg xl:w-[400px]">
			<Image
				width={200}
				height={200}
				quality={100}
				priority={false}
				alt="gallery"
				src="/images/gallery/meduana-PdnseHuDFZU-unsplash.jpg"
			/>
			<div className="flex w-full justify-center">
				<SubHeading text={text} />
			</div>
		</article>
	);
};

export default Category;
