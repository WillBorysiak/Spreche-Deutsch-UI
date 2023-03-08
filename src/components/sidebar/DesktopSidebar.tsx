import SidebarContent from '../containers/Navigation';

const DesktopSidebar = () => {
	return (
		<section
			id="desktop-sidebar"
			className="no-scrollbar hidden h-screen w-screen overflow-auto bg-green-900 transition duration-500 ease-in-out sm:w-96 lg:relative lg:block lg:w-[400px]"
		>
			<SidebarContent />
		</section>
	);
};

export default DesktopSidebar;
