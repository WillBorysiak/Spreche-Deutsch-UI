import { useRouter } from 'next/router';

import { useSidebarStore } from '../../store/sidebarStore';
import SearchButton from '../generic/buttons/SearchButton';
import PageHeading from '../generic/typography/heading/PageHeading';
import SiteHeading from '../generic/typography/heading/SiteHeading';
import SidebarToggle from '../header/SidebarToggle';
import ThemeToggle from '../header/ThemeToggle';

const Header = () => {
	const { mobileSidebar, closeMobileSidebar, toggleMobileSidebar } = useSidebarStore();

	// create desktop heading
	const router = useRouter();
	const path = router.asPath.split('/');
	const routeStr = path.length > 2 ? path[2] : path[1];
	const routeStrSpaces = routeStr.replace(/-/g, ' ');
	const headingText = routeStrSpaces.charAt(0).toUpperCase() + routeStrSpaces.slice(1);

	return (
		<section id="header" className="light-bg dark:dark-bg flex w-full items-center px-3 py-1 lg:h-[5%] lg:py-0">
			{/* desktop header */}
			<div id="desktop-header" className="hidden w-full flex-row items-center justify-between lg:flex">
				<div className="flex w-[125px] justify-start">
					<SearchButton />
				</div>

				<PageHeading text={headingText} mobile={false} />

				<div className="flex w-[125px] justify-end">
					<ThemeToggle />
				</div>
			</div>

			{/* mobile header */}
			<div id="mobile-header" className="flex w-full items-center justify-between lg:hidden">
				<div className="flex w-[50px] justify-start">
					<SidebarToggle sidebarProps={{ mobileSidebar, toggleMobileSidebar }} />
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
					<SearchButton />
				</div>
			</div>
		</section>
	);
};

export default Header;
