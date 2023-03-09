import SidebarToggle from '../header/SidebarToggle';
import Heading from '../typography/Heading';
import { useSidebarStore } from '../../store/sidebarStore';

const MobileHeader = () => {
	const { mobileSidebar, toggleMobileSidebar } = useSidebarStore();

	return (
		<div id="mobile-container" className="flex flex-row lg:hidden">
			<SidebarToggle sidebarProps={{ mobileSidebar, toggleMobileSidebar }} />
			<Heading text="Spreche Deutsch" />
		</div>
	);
};

export default MobileHeader;
