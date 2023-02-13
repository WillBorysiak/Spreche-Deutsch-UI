import { Transition } from '@headlessui/react';

import { useSidebarStore } from '../../store/sidebarStore';
import SidebarContent from '../sidebar/SidebarContent';

const Sidebar = () => {
	const { desktopSidebar } = useSidebarStore();

	return (
		<>
			<Transition
				className="hidden w-screen items-center justify-center bg-green-900 sm:w-96 lg:relative lg:flex lg:w-[400px]"
				show={desktopSidebar}
				enter="transition ease-in-out duration-500 transform"
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-500 transform"
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
			>
				<SidebarContent />
			</Transition>
		</>
	);
};

export default Sidebar;
