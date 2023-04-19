const MainLayout = (props: { children: React.ReactNode }) => {
	const { children } = props;

	return (
		<div id="main-layout" className="light-bg dark:dark-bg w-full lg:h-full">
			{children}
		</div>
	);
};

export default MainLayout;
