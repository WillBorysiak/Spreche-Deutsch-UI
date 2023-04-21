import Navigation from '../containers/Navigation';

const DesktopSidebar = () => {
	return (
		<section
			id="desktop-sidebar"
			className="no-scrollbar light-bg dark:dark-bg hidden h-full w-[425px] overflow-y-auto lg:block"
		>
			<Navigation />
		</section>
	);
};

export default DesktopSidebar;
