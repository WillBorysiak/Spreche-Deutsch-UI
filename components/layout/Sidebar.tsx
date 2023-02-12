import { Transition } from '@headlessui/react';

const Sidebar = (props: { showSidebar: boolean }) => {
	return (
		<>
			<Transition
				className="relative z-10"
				show={props.showSidebar}
				enter="transition ease-in-out duration-250 transform"
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-250 transform"
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
			>
				<section
					id="sidebar"
					className="flex h-screen w-screen items-center justify-center border-2 border-green-500 bg-green-900 sm:w-96 lg:w-[400px]"
				>
					<h1>Sidebar</h1>
				</section>
			</Transition>
		</>
	);
};

export default Sidebar;
