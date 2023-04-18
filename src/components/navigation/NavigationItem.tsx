import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Category } from '../../interfaces/Category';
import { useSidebarStore } from '../../store/sidebarStore';
import NavHeading from '../generic/typography/nav/NavHeading';
import NavText from '../generic/typography/nav/NavText';

const NavigationItem = (props: { data: Category[] }) => {
	const parentCategory = props.data[0].type;
	const items = props.data;

	const [isVisible, setIsVisible] = useState(false);
	const { mobileSidebar, closeMobileSidebar } = useSidebarStore();

	const router = useRouter();

	// parent route opens navigation
	useEffect(() => {
		if (parentCategory) {
			const baseUrl = router.asPath.split('/')[1];
			if (baseUrl === parentCategory) setIsVisible(true);
		}
	}, [router.asPath, parentCategory]);

	// opens always on mobile
	useEffect(() => {
		if (mobileSidebar) setIsVisible(true);
	}, [mobileSidebar]);

	return (
		<div id="navigation-item" className="mb-10">
			<div
				className="w-fit cursor-pointer hover:scale-105"
				onClick={() => {
					closeMobileSidebar();
					router.push(`/${parentCategory}`);
				}}
			>
				<NavHeading text={parentCategory} />
			</div>
			{items.map((item, index) => (
				<Transition
					key={index}
					show={isVisible}
					className="overflow-hidden duration-1000 ease-in-out"
					enterFrom="transform scale-95 opacity-0 max-h-32"
					enterTo="transform scale-100 opacity-100 max-h-32"
					leaveFrom="transform scale-100 opacity-100 max-h-32"
					leaveTo="transform scale-95 opacity-0 max-h-0"
				>
					<span
						className="ml-3 w-fit cursor-pointer transition ease-linear hover:underline"
						onClick={() => {
							closeMobileSidebar();
							router.push(`/${parentCategory}/${item.route}`);
						}}
					>
						<NavText text={item.name} />
					</span>
				</Transition>
			))}
		</div>
	);
};

export default NavigationItem;
