import { Transition } from '@headlessui/react';

import { useSidebarStore } from '../../store/sidebarStore';
import Navigation from '../containers/Navigation';

const MobileSidebar = () => {
	const { mobileSidebar } = useSidebarStore();

	return (
		<Transition
			id="mobile-sidebar"
			className="no-scrollbar light-background dark:dark-background absolute z-10 w-screen overflow-y-auto sm:w-96 lg:hidden"
			show={mobileSidebar}
			enter="default-transition transform"
			enterFrom="-translate-x-full"
			enterTo="translate-x-0"
			leave="default-transition transform"
			leaveFrom="translate-x-0"
			leaveTo="-translate-x-full"
		>
			<Navigation />
		</Transition>
	);
};

export default MobileSidebar;
