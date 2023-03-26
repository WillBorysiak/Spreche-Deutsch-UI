import { Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Categories } from '../../interfaces/Categories';
import { useSidebarStore } from '../../store/sidebarStore';
import NavText from '../generic/typography/NavText';
import SubHeading from '../generic/typography/SubHeading';

const NavigationItem = (props: { data: Categories }) => {
	const { title, route, items } = props.data;

	const [isVisible, setIsVisible] = useState(false);

	const { closeMobileSidebar } = useSidebarStore();

	const router = useRouter();

	useEffect(() => {
		const baseUrl = router.asPath.split('/')[1];
		if (baseUrl === route) setIsVisible(true);
	}, [router.asPath, route]);

	return (
		<div id="navigation-item" className="mb-10">
			<div
				className="default-transition w-fit cursor-pointer hover:scale-105"
				onClick={() => {
					if (router.route !== route || !isVisible) setIsVisible(true);
					router.push(`/${route}`);
				}}
			>
				<SubHeading text={title} />
			</div>
			{items.map((item, index) => (
				<Transition
					key={index}
					show={isVisible}
					className="overflow-hidden duration-500 ease-in-out"
					enterFrom="transform scale-95 opacity-0 max-h-0"
					enterTo="transform scale-100 opacity-100 max-h-32"
					leaveFrom="transform scale-100 opacity-100 max-h-32"
					leaveTo="transform scale-95 opacity-0 max-h-0"
				>
					<div
						className="mt-3 ml-3 w-fit cursor-pointer transition ease-linear hover:underline"
						onClick={() => {
							closeMobileSidebar();
							router.push(`/${route}/${item.route}`);
						}}
					>
						<NavText text={item.text} />
					</div>
				</Transition>
			))}
		</div>
	);
};

export default NavigationItem;
