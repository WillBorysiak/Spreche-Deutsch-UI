import Navigation from '../containers/Navigation';

const DesktopSidebar = () => {
	return (
		<section
			id="desktop-sidebar"
			className="no-scrollbar light-background dark:dark-background hidden h-full w-[400px] overflow-y-auto  lg:block"
		>
			<Navigation />
		</section>
	);
};

export default DesktopSidebar;
