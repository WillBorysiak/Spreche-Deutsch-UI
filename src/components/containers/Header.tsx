import { useRouter } from 'next/router';
import { useState } from 'react';
import { useCategoriesStore } from '../../store/categoriesStore';

import { useSidebarStore } from '../../store/sidebarStore';
import PageHeading from '../generic/typography/heading/PageHeading';
import SiteHeading from '../generic/typography/heading/SiteHeading';
import SidebarToggle from '../header/SidebarToggle';
import ThemeToggle from '../header/ThemeToggle';
import SearchButton from '../search/SearchButton';
import SearchModal from '../search/SearchModal';

const Header = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { mobileSidebar, closeMobileSidebar, toggleMobileSidebar } = useSidebarStore();
	const { getCategoriesAsArray } = useCategoriesStore();

	const router = useRouter();

	// desktop heading
	const desktopHeadingParser = (routerPath: string) => {
		const path = routerPath.split('/');
		const routeStr = path.length > 2 ? path[2] : path[1];
		const routeStrSpaces = routeStr.replace(/-/g, ' ');
		return routeStrSpaces.charAt(0).toUpperCase() + routeStrSpaces.slice(1);
	};
	const desktopHeading = desktopHeadingParser(router.asPath);

	// search modal
	const searchClick = () => setIsModalOpen(true);
	const searchClose = () => setIsModalOpen(false);
	const modalCategories = getCategoriesAsArray();

	return (
		<section id="header" className="light-bg dark:dark-bg flex w-full items-center px-3 py-1 lg:h-[5%] lg:py-0">
			{/* desktop header */}
			<div id="desktop-header" className="hidden w-full flex-row items-center justify-between lg:flex">
				<div className="flex w-[125px] justify-start">
					<SearchButton searchClick={searchClick} />
				</div>

				<PageHeading text={desktopHeading} mobile={false} />

				<div className="flex w-[125px] justify-end">
					<ThemeToggle />
				</div>
			</div>

			{/* mobile header */}
			<div id="mobile-header" className="flex w-full items-center justify-between lg:hidden">
				<div className="flex w-[50px] justify-start">
					<SidebarToggle mobileSidebar={mobileSidebar} toggleMobileSidebar={toggleMobileSidebar} />
				</div>

				<span
					className="px-3"
					onClick={() => {
						closeMobileSidebar();
						router.push('/');
					}}
				>
					<SiteHeading text="Spreche Deutsch" />
				</span>

				<div className="flex w-[50px] justify-end">
					<SearchButton searchClick={searchClick} />
				</div>
			</div>

			<SearchModal isOpen={isModalOpen} onClose={searchClose} categories={modalCategories} />
		</section>
	);
};

export default Header;
