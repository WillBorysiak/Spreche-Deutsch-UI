import Heading from '../typography/Heading';

const SidebarContent = () => {
	return (
		<section id="sidebar">
			<div id="sidebar-container" className="flex flex-col items-center justify-center p-10">
				<Heading content="Sidebar" />

				<p className="mt-10 mb-10">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				</p>
			</div>
		</section>
	);
};

export default SidebarContent;
