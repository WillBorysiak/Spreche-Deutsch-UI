import { useSidebarStore } from '../../store/sidebarStore';
import SidebarToggle from '../header/SidebarToggle';
import ThemeToggle from '../header/ThemeToggle';
import Heading from '../typography/Heading';

const Header = () => {
	const { mobileSidebar, toggleMobileSidebar } = useSidebarStore();

	return (
		<section
			id="header"
			className="light-background dark:dark-background flex h-[5%] w-full items-center justify-center"
		>
			<div id="header-container" className="flex w-full flex-row items-center justify-between p-5">
				<SidebarToggle sidebarProps={{ mobileSidebar, toggleMobileSidebar }} />
				<Heading text="Header" />
				<ThemeToggle />
			</div>
		</section>
	);
};

export default Header;
