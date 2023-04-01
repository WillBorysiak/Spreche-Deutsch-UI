import Image from 'next/image';
import { useRouter } from 'next/router';

import { useSidebarStore } from '../../store/sidebarStore';
import Title from '../generic/typography/Title';
import SidebarToggle from '../header/SidebarToggle';
import ThemeToggle from '../header/ThemeToggle';

const Header = () => {
	const { mobileSidebar, closeMobileSidebar, toggleMobileSidebar } = useSidebarStore();

	const router = useRouter();

	return (
		<section
			id="header"
			className="light-background dark:dark-background flex w-full items-center px-3 py-5 lg:h-[5%] lg:py-0"
		>
			<div id="header-container" className="flex w-full flex-row items-center justify-between">
				<Image className="hidden lg:block" src="/images/german-flag.svg" alt="The German flag" height={65} width={65} />

				{/* mobile */}
				<SidebarToggle sidebarProps={{ mobileSidebar, toggleMobileSidebar }} />
				<div className="flex lg:hidden">
					<span
						onClick={() => {
							closeMobileSidebar();
							router.push('/');
						}}
					>
						<Title text="Spreche Deutsch" />
					</span>
					<Image className="ml-3" src="/images/german-flag.svg" alt="The German flag" height={50} width={50} />
				</div>

				<ThemeToggle />
			</div>
		</section>
	);
};

export default Header;
