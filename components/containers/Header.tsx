import { faBars, faX } from '@fortawesome/pro-thin-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSidebarStore } from '../../store/sidebarStore';
import Heading from '../typography/Heading';

const Header = () => {
	const { mobileSidebar, toggleMobileSidebar } = useSidebarStore();

	return (
		<section id="header" className="flex h-[10%] w-full items-center justify-center bg-blue-900 lg:relative">
			<div id="header-container" className="flex flex-col">
				<Heading content="Header" />
				<button className="mt-1 lg:hidden" onClick={toggleMobileSidebar}>
					{!mobileSidebar && <FontAwesomeIcon icon={faBars} size="2x" />}
					{mobileSidebar && <FontAwesomeIcon icon={faX} size="2x" />}
				</button>
			</div>
		</section>
	);
};

export default Header;
