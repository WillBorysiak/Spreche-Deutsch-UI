import Image from 'next/image';
import { useRouter } from 'next/router';

import { useSidebarStore } from '../../store/sidebarStore';
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
		<section
			id="header"
			className="light-background dark:dark-background flex w-full items-center px-3 py-1 lg:h-[5%] lg:py-0"
		>
			<div id="header-container" className="flex w-full items-center justify-between">
				{/* desktop */}
				<Image
					className="hidden w-[65px] lg:block"
					src="/images/svg/german-flag.svg"
					alt="The German flag"
					height={65}
					width={65}
					priority={true}
				/>
				<PageHeading text={headingText} mobile={false} />

				{/* mobile */}
				<div className="w-[65px] lg:hidden">
					<SidebarToggle sidebarProps={{ mobileSidebar, toggleMobileSidebar }} />
				</div>
				<span
					className="lg:hidden"
					onClick={() => {
						closeMobileSidebar();
						router.push('/');
					}}
				>
					<SiteHeading text="Spreche Deutsch" />
				</span>

				<div id="theme-toggle-container" className="flex w-[65px] justify-end">
					<ThemeToggle />
				</div>
			</div>
		</section>
	);
};

export default Header;
