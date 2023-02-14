import SidebarContent from '../sidebar/SidebarContent';

const DesktopSidebar = () => {
	return (
		<section
			id="desktop-sidebar"
			className="hidden w-screen bg-green-900 transition duration-500 ease-in-out sm:w-96 lg:relative lg:block lg:w-[400px]"
		>
			<SidebarContent />
		</section>
	);
};

export default DesktopSidebar;
