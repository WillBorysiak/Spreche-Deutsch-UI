import Navigation from '../containers/Navigation';

const DesktopSidebar = () => {
	return (
		<section
			id="desktop-sidebar"
			className="no-scrollbar light-background dark:dark-background hidden h-screen w-screen overflow-y-auto sm:w-96 lg:relative lg:block lg:w-[400px]"
		>
			<Navigation />
		</section>
	);
};

export default DesktopSidebar;
